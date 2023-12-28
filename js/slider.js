
setTimeout(() => {
    const swiper = new Swiper('.swiper', {

        // Default parameters
        // slidesPerView: 1,
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },

    });
}, 1000)

