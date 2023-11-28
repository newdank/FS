var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var ImageSource1 = "images/dice" + randomNumber1 + ".png";

var ImageChange1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", ImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var ImageSource2 = "images/dice" + randomNumber2 + ".png";

var ImageChange2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", ImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
