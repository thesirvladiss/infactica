const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


const listItems = document.querySelectorAll('.locations-list-item');

listItems.forEach(item => {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    });
})



const menuLinks = document.querySelectorAll('.menu-list-item ');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isActive = link.classList.contains('active');

        if (!isActive) {
            menuLinks.forEach(otherLink => otherLink.classList.remove('active'));
        }

        link.classList.toggle('active');
    });
});

document.querySelectorAll('.sub-block').forEach(subBlock => {
    subBlock.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

document.addEventListener('click', () => {
    menuLinks.forEach(link => link.classList.remove('active'));
});

document.addEventListener('DOMContentLoaded', () => {
    const servicesClue = document.querySelectorAll('.services-clue');
    const catalogItems = document.querySelectorAll('.services-catalog-item');
    const slides = document.querySelectorAll('.services-slides');
    const catalog = document.querySelectorAll('.datasets-catalog');
    const servicesSection = document.querySelector('.services-section');

    const showContent = (dataVal) => {
        slides.forEach(slide => {

            if (slide.dataset.val === dataVal) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');

            }
            if(window.innerWidth <= 1024){
                slide.classList.add('active');

            }
        });

        catalogItems.forEach(item => {
            if (item.dataset.val === dataVal) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        servicesClue.forEach(item => {
            if (item.dataset.val === dataVal) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
            if(window.innerWidth <= 1024){
                item.classList.remove('active');
            }
        });
        catalog.forEach(item => {
            if (item.dataset.val === dataVal) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }

        });
    };

    catalogItems.forEach(item => {
        item.addEventListener('click', () => {
            const dataVal = item.dataset.val;
            showContent(dataVal);
        });
    });

    catalogItems.forEach(item => {
        item.addEventListener('click', () => {
            const dataVal = item.dataset.val;

            servicesSection.className = servicesSection.className
                .split(' ')
                .filter(cls => !cls.endsWith('-section'))
                .join(' ');

            if (dataVal === 'proxy-catalog') {
                servicesSection.classList.add('services-section');
            } else if (dataVal === 'scraping-catalog') {
                servicesSection.classList.add('scraping-section');
            } else if (dataVal === 'datasets-catalog') {
                servicesSection.classList.add('datasets-section');
            }
        });
    });


    if (catalogItems.length > 0) {
        showContent(catalogItems[0].dataset.val);
    }
    if (window.innerWidth <= 1024) {
        showContent(catalogItems[0].dataset.val);
    }


});



