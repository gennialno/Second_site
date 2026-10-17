let place = document.querySelector(".shoptitle")
let message = "тостер4000"
let letter_number = 0

function showletter(){
    let span = document.createElement("span")
    span.textContent = message[letter_number]
    place.appendChild(span)
    letter_number += 1
    if (message.length > letter_number){
        setTimeout(showletter, 200)
    }

}

showletter()
