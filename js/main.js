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