const start = document.querySelector('.start');
const startBtn = document.querySelector('.startBtn');
const logo = document.querySelector('.logo');
const wave = document.querySelector('.wave');
const clearWave = document.querySelector('.waveClear');
const typesBtn = document.querySelector('.typesBtn');

function firstStep() {
  startBtn.style.opacity = '0';
  logo.style.transform = 'translate(80px, 32.45px)';
  setTimeout(() => {
    showBtn();
  }, 1000);

  function showBtn() {
    startBtn.style.display = 'none';
    wave.style.transform = 'translate(50vw, 0)';
    clearWave.style.transform = 'translate(-430px, -50vh)';
    typesBtn.style.transform = 'translate(0, -85vh)';
    setTimeout(() => {
      wave.style.display = 'none';
    }, 400);
  }
}

const map = document.querySelector('.map');

function secondStep() {
  typesBtn.style.transform = 'translate(0, 0)';
  clearWave.style.opacity = '0';
  setTimeout(() => {
    start.style.display = 'none';
    map.style.opacity = '1';
  }, 400);
}

startBtn.addEventListener('click', firstStep);
typesBtn.addEventListener('click', secondStep);
