// document.querySelector(".phone").addEventListener("click", function () {
//     document.querySelector(".phone").style.transform="rotateY(180deg)"
// })

function phone_click_rotate() {

    document.querySelector(".phone").addEventListener("click", function () {
        let pm_pd = true;
        if (pm_pd) {
            document.querySelector(".pm").style.transform = "rotateY(360deg)"
            if (document.querySelector(".pm").style.transform === "rotateY(360deg)") {
                document.querySelector(".pm").style.animation = "pm_rotate 1s";
            }
            pm_pd = false;
        }
    })

    // document.querySelector(".phone").addEventListener("click", function () {
    //     if (pm_pd === false) {
    //         document.querySelector(".pm").style.transform = "rotateY(360deg)"
    //         if (document.querySelector(".pm").style.transform === "rotateY(360deg)") {
    //             document.querySelector(".pm").style.animation = "pm_rotate 1s";
    //         }
    //         pm_pd = true;
    //     }
    // })

}
phone_click_rotate();


document.querySelector(".header").addEventListener("click", () => {
    // document.querySelector(".header_scroll").style.height = "100%";
    document.querySelector(".header_scroll").style.display = "block"
    document.querySelector(".header_scroll").style.animation = "header_scroll 0.8s forwards";
})




// 

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('beijingTime').textContent = `${formattedTime}`;
}
// 初始化时间显示
updateTime();
// 每秒更新时间
setInterval(updateTime, 1000);