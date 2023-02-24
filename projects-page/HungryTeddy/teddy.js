function teddyBurger(element) {
    element.style.top =
        Math.random() * (window.innerHeight - element.height);
    element.style.left =
        Math.random() * (window.innerWidth - element.width);
}

for (const img of document.querySelectorAll("img")) {
    teddyBurger(img);
}