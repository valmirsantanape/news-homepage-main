const btnMenu = document.querySelector(".button-menu")
const menuNavigation = document.querySelector(".navigation")


// btnMenu.addEventListener("click", () => {
//     alert("teste")
//     
// })



function expandMenu() {
    menuNavigation.classList.add("expand-navigation")
    menuNavigation.classList.remove("navigation")
    btnMenu.classList.add("button-menu-close")
    btnMenu.classList.remove("button-menu")
}

function closedMenu() {
    
    menuNavigation.classList.remove("expand-navigation")
    menuNavigation.classList.add("navigation")
    btnMenu.classList.remove("button-menu-close")
    btnMenu.classList.add("button-menu")
}