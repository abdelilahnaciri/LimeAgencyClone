var navMenu = document.querySelector(".menu");
var menuList = document.querySelectorAll(".menu_list")[0];
var menuList2 = document.querySelectorAll(".menu_list")[1];
document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    if (!Boolean(menuList.style.left)) {
        menuList.style.left = "0";
        menuList2.style.left = "0";
        menuList2.style.top = "280px";
        menuList2.style.paddingTop = "0";
    }
    else {
        menuList.removeAttribute('style');
        menuList2.removeAttribute('style');
    }
}))
// console.log(Boolean(menuList.style.left));

// console.log(Boolean(menuList.style="display: flex;"));