if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

var loadingScreen = document.querySelector(".loading-screen")

document.body.style.overflowY = 'hidden';

setTimeout(() => {
    loadingScreen.style.display = 'none'
    document.body.style.overflowY = 'auto';
}, 5100)