
let player_name_one = document.querySelector(".player_name_one")
let player_submit_one = document.querySelector(".player_submit_one")
let player_one = document.querySelector(".player_one")
let player_tow = document.querySelector(".player_tow")
let error = document.querySelector(".error")


// ========================================================

let player_name_tow = document.querySelector(".player_name_tow")
let player_submit_tow = document.querySelector(".player_submit_tow")
let player_three = document.querySelector(".player_three")


// ================================================

let player_name_three = document.querySelector(".player_name_three")
let player_submit_three = document.querySelector(".player_submit_three")
let player_four = document.querySelector(".player_four")


player_submit_one.addEventListener("click", function(){
    if(player_name_one.value == ""){
        error.innerHTML ="plase enter your name"
    }else{
    player_tow.style.display = "flex"
    player_one.style.display = "none"
}
})



player_submit_tow.addEventListener("click", function(){
    if(player_name_tow.value == ""){
        error.innerHTML ="plase select  your 0 to 9 name"
    }else{
    player_three.style.display = "flex"
    player_tow.style.display = "none"
}
})


player_submit_three.addEventListener("click", function(){
    if(player_name_three.value == ""){
        error.innerHTML ="plase select  your 0 to 9 name"
    }else{
    player_four.style.display = "flex"
    player_three.style.display = "none"
}
})
