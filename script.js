let button = document.querySelector(".buy")
let text = document.querySelector(".shopmoney")
let img = document.querySelector(".shopimage")


button.addEventListener("click", function (){
    if (button.textContent == "Купить"){
        button.textContent = "В корзине"
        button.style.background = "green"
        button.style.borderRadius = "15px"
        button.style.width = "150px"
        button.style.height = "50px"
        button.style.color = "white"
    }
    else{
        button.textContent = "Купить"
        button.style.background = "red"
        button.style.color = "white"
    }
})

text.addEventListener("click", function (){
    text.textContent = text.textContent - 1
    if (text.textContent == "-1"){
        text.textContent = 0
    }
})

img.addEventListener("click", function (){
    img.src = "orig.png"
})
console.log(img)

