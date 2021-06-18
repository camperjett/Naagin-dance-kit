let numberOfDrumButton = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumButton; i++) {
  // click
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let key = this.innerHTML;
    playDrum(key);
  });
}
  // keydown
document.addEventListener("keydown", function (e) {
  let key = e.key;
  playDrum(key);
});
function playDrum (key) {
  animateButton(key);
  switch(key) {
    case "w": let crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;
    case "a": let kickbass = new Audio('sounds/kick-bass.mp3');
    kickbass.play();
    break;
    case "s": let snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;
    case "d": let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case "j": let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case "k": let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case "l": let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    default: console.log(key);
  }
}

function animateButton(key){
  var classes = document.querySelector("." + key);

  classes.classList.toggle("pressed");

  setTimeout(function(){
    classes.classList.toggle("pressed");
  }, 100);
}
