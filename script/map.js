const arrowBtn = document.querySelector('.arrowBtn');
const card = document.querySelector('.card');
const cardImg = document.querySelector('.cardImg');
const textCard = document.querySelector('.textCard');
const places = document.querySelector('.places');
const place = Array.from(places.querySelectorAll('.place'));

function hideCard() {
  console.log(place);
  card.style.transform = 'translate(50vw, 0)';
  setTimeout(() => {
    card.classList.add('cardInfo');
    cardImg.style.display = 'unset';
    textCard.style.display = 'unset';
    card.style.top = '84px';
  }, 1000);
}

arrowBtn.addEventListener('click', hideCard);

function showCard() {
  card.style.transform = 'translate(0, 0)';
}

place.forEach((element) => {
  element.addEventListener('click', showCard);
});
