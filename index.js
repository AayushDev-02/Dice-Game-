
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var randomDiceImage1 = "img/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "img/dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDiceImage1);
img2.setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".heading").innerHTML="🚩Player 1 Win";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector(".heading").innerHTML="Player 2 Win 🚩";
}
else{
    document.querySelector(".heading").innerHTML="🚩 Draw! 🚩";
}
