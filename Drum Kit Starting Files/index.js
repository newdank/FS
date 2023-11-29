// function handleClick(){
//   alert("The button got clicked");
// }
var drumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<drumButtons;i++){

document.querySelector("button")[i].addEventListener("click",function(){
  alert("The button is clicked");
});
}