var menuBtn = document.querySelector(".menu-btn")
var sideMenu = document.querySelector(".side-menu")
var closeBtn = document.querySelector(".close-menu")

menuBtn.addEventListener("click", () => {
    gsap.to(sideMenu, {
        x: 0
    })
})


closeBtn.addEventListener("click", () => {
    gsap.to(sideMenu, {
        x: -400
    })
})