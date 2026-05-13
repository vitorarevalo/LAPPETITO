if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

var body = document.querySelector("body")

var loadingScreen = document.querySelector(".loading-screen")
var mainContent = document.querySelector(".main-content");

document.body.style.overflowY = 'hidden';

setTimeout(() => {
    loadingScreen.style.display = 'none'
    document.body.style.overflowY = 'auto';

    
    gsap.fromTo(mainContent, {
        opacity: 0,
    },
    
    { 
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
    }
    
);


gsap.from(".slider", {
    y: 1000,
    duration: 1,
    opacity: 0
})

gsap.from("#special-text", {
    x: 1000,
    duration: 1,
    opacity: 0
})

gsap.from(".border", {
    x: -400,
    duration: 1,
    opacity: 0
})



}, 5100)