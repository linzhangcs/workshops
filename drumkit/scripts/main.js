// Keydown event listener
document.addEventListener('keydown', playSound);
// callback function for getting audio and key elements
function playSound(e) {
  const audioElm = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audioElm) return;

  audioElm.currentTime = 0;
  audioElm.play();

  key.classList.add('playing');
}

// Get key elements and add transitionend event addEventListener
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  this.classList.remove('playing');
}