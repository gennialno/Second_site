let seconds = 0
let timer = null

let secondstimer = document.querySelector(".seconds")
let secondsStart = document.querySelector(".START")
let secondsStop = document.querySelector(".STOP")
let secondsreset = document.querySelector(".RESET")

function update_timer() {
    seconds += 1
    secondstimer.textContent = seconds
}

secondsStart.addEventListener("click", function(){
    if (timer == null){
        timer = setInterval(update_timer, 1000)
    }
})

secondsStop.addEventListener("click", function(){
    clearInterval(timer)
    timer = null
})

secondsreset.addEventListener("click", function(){
    clearInterval(timer)
    timer = null
    secondstimer.textContent = 0
    seconds = 0
})