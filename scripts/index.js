const drawer = document.querySelector("#drawer")
const btn_drawer = document.querySelector(".btn_drawer")
const btn_drawer_close = document.querySelector(".btn_drawer_close")

btn_drawer.addEventListener('click', handleOpenDrawer)
btn_drawer_close.addEventListener('click', handleOpenDrawer)

function handleOpenDrawer(){
    console.log("here")
    drawer.classList.toggle("visible")
}

