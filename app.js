const h1 = document.getElementById('animal-name');
const horsePic = document.getElementById('horse-picture');
const catPic = document.getElementById('cat-picture');
const dogPic = document.getElementById('dog-picture');
const horseSound = document.getElementById('horse-sound');
const catSound = document.getElementById('cat-sound');
const dogSound = document.getElementById('dog-sound');


horseSound.addEventListener('click', () => {
  horseSound.play();
});

catSound.addEventListener('click', () => {
  catSound.play();
});

dogSound.addEventListener('click', () => {
  dogSound.play();
});
