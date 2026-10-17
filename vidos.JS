let video = document.querySelector("video")
let pause = document.querySelector(".pause")
let unmute = document.querySelector(".unmute")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let index = 0
let playlist = ["vidos1", "vidos2", "vidos3"]

pause.addEventListener("click", function (){
    if (video.paused){
        video.play()
        pause.textContent = "pause!"
    }
    else{
        video.pause()
        pause.textContent = "play"
    }
})

unmute.addEventListener("click", function (){
    if (video.muted){
        video.muted = false
        unmute.textContent = "off"
    }
    else{
        video.muted = true
        unmute.textContent = "on"
    }
})

next.addEventListener("click", function (){
    if (index == playlist.length - 1){
        index = 0
    }
    else{
        index += 1
    }
    console.log(index)
    video.src = `${playlist[index]}.mp4`
})

prev.addEventListener("click", function (){
    if (index == 0){
        index = playlist.length - 1
    }
    else{
        index -= 1
    }
    console.log(index)
    video.src = `${playlist[index]}.mp4`
})

