const menuButton = document.querySelector("#menu-open-button");


menuButton.addEventListener("click", () => {
    const isMenuOpen = document.body.classList.toggle("show-mobile-menu");
    if(isMenuOpen){
        menuButton.classList.add("fa-times")
    } else {
        menuButton.classList.remove("fa-times")
    }
})

const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
})