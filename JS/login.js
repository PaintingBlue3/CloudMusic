//手机号登录
const phoneNum = document.querySelector('.phoneNum');
const password = document.querySelector('.password');
const loginButton = document.querySelector("#login");
const loginClick = document.querySelector(".login");
const icon_list = document.querySelector(".head");
const icon = document.querySelector("#icon");

//发短信的，暂时用不到
// sendButton.addEventListener("click", async() => {
//     const send = await fetch("http://localhost:3000/captcha/sent?phone=" + phoneNum.value);
//     const res = await send.json();
//     if (res.message) {
//         alert(res.message);
//     }
//     console.log(res);
// });

let loginForm = new FormData();
loginForm.append("phone", "")
loginForm.append("password", "")
loginButton.addEventListener("click", async() => {
    loginForm.set("phone", phoneNum.value)
    loginForm.set("password", password.value)
    const login = await fetch("http://localhost:3000/login/cellphone", {
        method: 'POST',
        body: loginForm
    })
    const res = await login.json();
    console.log(res);
    if (res.message) {
        alert(res.message)
    }
    loginCheck();
})

//检查登录状态
async function loginCheck() {
    const loginCheck = await fetch("http://localhost:3000/login/status")
    const res = await loginCheck.json();
    // console.log(res.data.code);
    // console.log(res.data);
    console.log(res.data.profile)
    if (res.data.profile != null) {
        loginClick.style.display = "none";
        icon_list.style.display = "flex";
    }
}

loginCheck()

//退出
const extend_lists = document.querySelectorAll(".extend-list");
console.log(extend_lists);

extend_lists[7].addEventListener("click", async() => {
    const logout = await fetch("http://localhost:3000/logout");
    const res = await logout.json();
    console.log(res);
    loginCheck()
})