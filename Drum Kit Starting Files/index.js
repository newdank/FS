// function handleClick(){
//   alert("The button got clicked");
// }
var drumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < drumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var buttonClickSound = this.innerHTML;
//     makeSound(buttonClickSound);
//   });
// }
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});
document.addEventListener("click", function (newEvent) {
  makeSound(newEvent.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
  }
}
// for (var j = 0; j < drumButtons.length; j++) {
//   document
//     .querySelectorAll(".drum")
//     [j].addEventListener("keypress", function () {
//       var buttonClickSound = this.innerHTML;
//       switch (buttonClickSound) {
//         case "w":
//           var crash = new Audio("sounds/crash.mp3");
//           crash.play();
//           break;
//         case "a":
//           var kick = new Audio("sounds/kick-bass.mp3");
//           kick.play();
//           break;
//         case "s":
//           var snare = new Audio("sounds/snare.mp3");
//           snare.play();
//           break;
//         case "d":
//           var tom1 = new Audio("sounds/tom-1.mp3");
//           tom1.play();
//           break;
//         case "j":
//           var tom2 = new Audio("sounds/tom-2.mp3");
//           tom2.play();
//           break;
//         case "k":
//           var tom3 = new Audio("sounds/tom-3.mp3");
//           tom3.play();
//           break;
//         case "l":
//           var tom4 = new Audio("sounds/tom-4.mp3");
//           tom4.play();
//           break;
//       }
//     });
// }
