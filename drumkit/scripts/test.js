document.addEventListener('keydown', playSound);

function playSound(e) {
  const audioElm = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audioElm) return;
  audioElm.currentTime = 0;
  audioElm.play();

  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  this.classList.remove('playing');
}