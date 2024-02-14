var navMenu = document.querySelector(".menu");
var menuList = document.querySelectorAll(".menu_list")[0];
var menuList2 = document.querySelectorAll(".menu_list")[1];
document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    if (!Boolean(menuList.style.left)) {
        menuList.style.left = "0";
        menuList.style.top = "10px";
        menuList2.style.left = "0";
        menuList2.style.top = "169px";
        menuList2.style.paddingTop = "0";
    }
    else {
        menuList.removeAttribute('style');
        menuList2.removeAttribute('style');
    }
}))

const mainHeader = document.querySelectorAll('.header');
window.addEventListener('scroll', main_header);
main_header();

function main_header() {
    let triggerBottom = window.scrollY;
    mainHeader.forEach(header => {
        const headerTop = header.getBoundingClientRect().bottom;
        if (triggerBottom > 100) {
            header.classList.add('active');
        }
        else {
            header.classList.remove('active');
        }
    })
    // console.log(triggerBottom);
}

const mainTitle = document.querySelectorAll('.main-title');
window.addEventListener('scroll', main_titles);
main_titles();

function main_titles() {
    const triggerBottom = Math.ceil(window.innerHeight / 5 * 4);
    mainTitle.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;
        if (titleTop <= triggerBottom) {
            title.classList.add('show');
        }
        else {
            title.classList.remove('show');
        }
    })
}

const secTitle = document.querySelectorAll('.sec-title');
window.addEventListener('scroll', sec_title);
sec_title();

function sec_title() {
    let triggerBottom = Math.ceil(window.innerHeight / 5 * 4);
    secTitle.forEach(title => {
        const secTitleTop = title.getBoundingClientRect().top;
        if (secTitleTop <= triggerBottom) {
            title.classList.add('sec-show');
        }
        else {
            title.classList.remove('sec-show');
        }
    })
}

const boxShow = document.querySelectorAll('.adv-show');
window.addEventListener('scroll', box_show);
box_show();
function box_show() {
    let triggerBottom = window.scrollY;
    boxShow.forEach(boxShow => {
        const boxShowTop = boxShow.getBoundingClientRect().bottom;
        if (triggerBottom > 1400) {
            boxShow.classList.add('show-box');
        }
        else if (triggerBottom < 800){
            boxShow.classList.remove('show-box');
        }
    })
    
}
// Swiper script for sliders
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
// Start About shining
const aboutBoxes = document.querySelectorAll('.show-about');
window.addEventListener('scroll', about_show);
about_show();
function about_show() {
    let triggerBottom = window.scrollY;
    aboutBoxes.forEach(aboutBoxes => {
        const aboutBoxesTop = aboutBoxes.getBoundingClientRect().bottom;
        if (triggerBottom > 3130) {
            aboutBoxes.classList.add('show-about');
        }
        else if (triggerBottom < 2445){
            aboutBoxes.classList.remove('show-about');
        }
    })
}
// End About shining

// Swiper script slideer for portfolio
// const carousel = document.querySelector('.carousel');

// let isDragging = false, startX, startScrollLeft;

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     console.log(e.pageX);
//     if(!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousup", dragStop);

/*=============== SWIPER JS ===============*/

var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints:{
    100: {
        slidesPerView: 1,
    },
    600: {
        slidesPerView: 2,
    },
    968: {
        slidesPerView: 5,
    },
},
});

var test = document.getElementsByClassName("div.swiper-swiper-slide-active");
// var test = document.querySelector('.swiper-pagination-bullet swiper-pagination-bullet-active');
// var value = test.getElementsByClassName('.swiper-pagination-bullet-active');
console.log(test);
test.style.paddingTop = "1000px";






// let swiperCards = new Swiper(".swiper", {
//     loop: true,
//     spaceBetween: 0,
//     grabCursor: true,

//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//     },

//     navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//     300: {
//         slidesPerView: 1.5,
//     },
//     600: {
//         slidesPerView: 2,
//     },
//     968: {
//         slidesPerView: 5,
//     },
//     },
// });