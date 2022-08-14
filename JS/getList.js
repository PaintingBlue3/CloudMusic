const musicBoxs = document.querySelectorAll(".music-box");
const musicList = await fetch("http://localhost:3000/top/playlist?limit=8")
const mlres = await musicList.json()

for (let i = 0; i < mlres.playlists.length; i++) {
    const cover = document.createElement("img")
    cover.src = mlres.playlists[i].coverImgUrl;
    const title = document.createElement("span");
    const icon_list = document.createElement("div");
    icon_list.className = "icon-list";
    const icon = document.createElement("img");
    icon.src = "./img/耳机.png";
    const playCount = document.createElement('p');
    playCount.innerHTML = mlres.playlists[i].playCount % 10000 + "万";

    icon_list.appendChild(icon)
    icon_list.appendChild(playCount)

    title.innerHTML = mlres.playlists[i].name;
    title.className = "music-box-title";
    const titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.appendChild(title);
    musicBoxs[i].appendChild(cover);
    musicBoxs[i].appendChild(icon_list);
    musicBoxs[i].appendChild(titleLink);
}