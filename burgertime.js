let burger = document.querySelector(".burger")
let nuvlist = document.querySelector(".nuvlist")
burger.addEventListener("click", function (){
    burger.classList.toggle("activate")
    nuvlist.classList.toggle("activate2")
})