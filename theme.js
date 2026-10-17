let moon = document.querySelector(".themeblack")
let sun = document.querySelector(".themewhite")
let body = document.querySelector("body")

moon.addEventListener("click", function(){
    body.style.background = "black"
    body.style.transition = "1s"
    body.style.color = "white"
    localStorage.setItem("bgcolor", "black")
    localStorage.setItem("color", "white")
})

sun.addEventListener("click", function(){
    body.style.background = "white"
    body.style.transition = "1s"
    body.style.color = "black"
    localStorage.setItem("bgcolor", "white")
    localStorage.setItem("color", "black")
})

if (localStorage.getItem("bgcolor")!= ""){
    body.style.background = localStorage.getItem("bgcolor")
    body.style.transition = "1s"
    body.style.color = localStorage.getItem("color")
}

