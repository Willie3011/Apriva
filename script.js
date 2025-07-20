const menuButton = document.querySelector("#menu-open-button");


menuButton.addEventListener("click", () => {
    const isMenuOpen = document.body.classList.toggle("show-mobile-menu");
    if(isMenuOpen){
        menuButton.classList.add("fa-times")
    } else {
        menuButton.classList.remove("fa-times")
    }
})