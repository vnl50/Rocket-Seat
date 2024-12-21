function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#avatar-pic");
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar.png");
        img.setAttribute("alt", "image of a guy wearing glasses");
    } else {
        img.setAttribute("src", "./assets/avatar-light.png");
        img.setAttribute("alt", "image of a guy wearing sunglasses");
    }
}

