const btnMenu = document.querySelector(".button-menu")
const menuNavigation = document.querySelector(".navigation")


// btnMenu.addEventListener("click", () => {
//     alert("teste")
//     
// })

function expandMenu() {
    menuNavigation.classList.add("expand-menu")
    menuNavigation.classList.remove("navigation")
}

function closedMenu() {
    menuNavigation.classList.remove("expand-menu")
    menuNavigation.classList.add("navigation")
}