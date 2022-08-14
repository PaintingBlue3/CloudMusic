const extend_page = document.querySelector('.extend')
const head_pic = document.querySelector(".head-pic")
head_pic.addEventListener("click", async() => {
    if (extend_page.style.display == "none") {
        extend_page.style.display = "block";
    } else {
        extend_page.style.display = "none";
    }
})

// 登录框打开
const loginClick = document.querySelector(".login");
const window = document.querySelector(".loginpage");
const bg = document.querySelector(".bg");

loginClick.addEventListener("click", async() => {
        window.style.display = "block";
        bg.style.display = "block";
})

// 登录框关闭
const close = document.querySelector("#close")
close.addEventListener("click", async() => {
    window.style.display = "none";
    bg.style.display = "none";
})