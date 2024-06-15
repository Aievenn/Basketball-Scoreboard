
let scoreHomeText= document.getElementById("score-home");
let scoreGuestText= document.getElementById("score-guest");
let resultText= document.getElementById("result")

let scoreHome = 0;
let scoreGuest = 0;

function home1() {
  scoreHome++; 
  scoreHomeText.textContent= scoreHome;
}

function home2() {
  scoreHome+=2; 
  scoreHomeText.textContent= scoreHome;
}

function home3() {
  scoreHome+=3; 
  scoreHomeText.textContent= scoreHome;
}

function guest1() {
  scoreGuest++; 
  scoreGuestText.textContent= scoreGuest;
}

function guest2() {
  scoreGuest+=2; 
  scoreGuestText.textContent= scoreGuest;
}


function guest3() {
  scoreGuest+=3; 
  scoreGuestText.textContent= scoreGuest;
}

function NewGame(){
  scoreHome=0;
  scoreHomeText.textContent = 0;
  scoreGuest=0;
  scoreGuestText.textContent = 0;
  resultText.textContent = ""
}

function Result() {


  if(scoreHome>scoreGuest){
    resultText.textContent = "HOME WON!"
  } else if(scoreHome<scoreGuest){
    resultText.textContent = "GUESTS WON!"
  } else if(scoreHome == scoreGuest) {
    resultText.textContent = "TIE"
  }




}

