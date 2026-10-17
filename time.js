let time = document.querySelector(".TIME")

function show_time(){
    let date = new Date()
    let hour = plus0(date.getHours())
    let minute = plus0(date.getMinutes())
    let second = plus0(date.getSeconds())
    let milsecond = plus0(date.getMilliseconds())
    time.textContent = hour + ":" + minute + ":" + second + ":" + milsecond
    setTimeout(show_time, 100)
}
function plus0(num){
    if (num < 10){
        return "0" + num
    }   
    else { 
        return num
    }
}
show_time()
