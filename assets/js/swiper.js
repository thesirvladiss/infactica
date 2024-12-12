const swiper = new Swiper('.proxy-swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    scrollbar: {
        el: '.services-scrollbar',
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,

        },
        360: {
            slidesPerView: 1.2,
            spaceBetween: 16

        },
        400: {
            slidesPerView: 1.2,
            spaceBetween: 10

        },
        530: {
            slidesPerView: 1.8,
            spaceBetween: 16
        },

        660: {
            slidesPerView: 2.3,

        },

        760: {
            slidesPerView: 2.7,
            spaceBetween: 10

        },
        1025: {
            slidesPerView: 3.7,

        },

        1165: {
            slidesPerView: 4,
            spaceBetween: 16

        },
        1200: {
            slidesPerView: 4,
        },
    }


});


let swiperScarping;

function initSwiper() {
    const isSmallScreen = window.innerWidth < 1000;

    swiperScarping = new Swiper('.scraping-swiper', {
        slidesPerView: isSmallScreen ? 1 : 3,
        spaceBetween: 32,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
            360: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
            567: {
                slidesPerView: 'auto',
            },
            700: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
            900: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },

            1200: {
                slidesPerView: 3,
            },
        },
    });
}

initSwiper();

window.addEventListener('resize', () => {
    const isSmallScreen = window.innerWidth < 1000;

    if ((isSmallScreen && !swiperScarping.params.loop) || (!isSmallScreen && swiperScarping.params.loop)) {
        swiperScarping.destroy(true, true);
        initSwiper();
    }
});


const swiperDatasets = new Swiper('.datasets-swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    scrollbar: {
        el: '.datasets-scrollbar',
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        360: {
            slidesPerView: 1.2,
            spaceBetween: 16
        },
        400: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        530: {
            slidesPerView: 1.8,
            spaceBetween: 16
        },

        567: {
            slidesPerView: 2,

        },
        730: {
            slidesPerView: 2.4,
            spaceBetween: 10

        },
        768: {
            slidesPerView: 2.7,
            spaceBetween: 16

        },

        1025: {
            slidesPerView: 3.6,

        },

        1165: {
            slidesPerView: 4,
            spaceBetween: 16

        },
        1200: {
            slidesPerView: 4,
        },
    }


});

