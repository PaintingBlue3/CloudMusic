const searchInput = document.querySelector(".search-cont")
const searchBox = document.querySelector(".searchList")
const foundMusic = document.querySelector(".foundMusic")
const searchInput_ano = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")
const searchPage = document.querySelector(".searchPage")
const header = document.querySelectorAll(".header-con-lists")

// 这是没能实现的搜索功能2.0
searchInput_ano.addEventListener("click", async() => {
    const searchEnd = await fetch("http://localhost:3000/search?keywords=" + searchInput_ano.value);
    const res = await searchEnd.json();
    console.log(res);
})

// 这是没能实现的搜索功能
async function keydown(event) {
    if (event.keyCode == 13) {
        console.log(("!"));
        if (searchInput.value == '') {
            while (searchBox.hasChildNodes()) //清屏
            {
                searchBox.removeChild(searchBox.firstChild);
            }
            alert("输入错误!");
            return;
        }

        const searchFeedback = await fetch("http://localhost:3000/search?keywords=海阔天空", {
            method: 'GET'
        })
        const musics = await searchFeedback.json();
        console.log(musics);

        while (searchBox.hasChildNodes()) //当div下还存在子节点时 循环继续
        {
            searchBox.removeChild(searchBox.firstChild);
        }
        for (let i = 0; i < musics.length; i++) {
            //大盒子
            const box = document.createElement('div');
            box.className = "searchLists";
            //标题
            const title = document.createElement('span');
            console.log(musics[i].name);
            title.innerHTML = musics[i].name;
            //图标
            const pic = document.createElement('img');
            pic.src = "./img/播放.png";

            box.appendChild(pic);
            box.appendChild(title);

            searchBox.appendChild(box);
        }
        foundMusic.style.display = "none"
        searchPage.style.display = "block"
        header[0].style.backgroundColor = "rgb(36,36,36)"


    }
}
header[0].style.backgroundColor = "rgb(0,0,0)"


header[0].addEventListener("click", async() => {
    foundMusic.style.display = "block"
    searchPage.style.display = "none"
    header[0].style.backgroundColor = "rgb(0,0,0)"
})
document.addEventListener("keydown", keydown);