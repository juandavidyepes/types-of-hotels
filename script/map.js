const arrowBtn = document.querySelector('.arrowBtn');
const card = document.querySelector('.card');
const title = document.querySelector('.title');
const cardImg = document.querySelector('.cardImg');
const textCard = document.querySelector('.textCard');
const places = document.querySelector('.places');
const place = Array.from(places.querySelectorAll('.place'));

function hideCard() {
  card.style.transform = 'translate(50vw, 0)';
  setTimeout(() => {
    card.classList.add('cardInfo');
    cardImg.style.display = 'unset';
    textCard.style.display = 'unset';
    card.style.top = '84px';
  }, 1000);
}

arrowBtn.addEventListener('click', hideCard);

function showCard() {}

place.forEach((element) => {
  element.addEventListener('click', () => {
    card.classList.add('cardInfo');
    cardImg.style.display = 'unset';
    textCard.style.display = 'unset';
    card.style.top = '84px';
    cardImg.style.opacity = '0.4';
    textCard.style.opacity = '0.4';
    title.style.opacity = '0.4';
    setTimeout(() => {
      if (element.className === 'place CANWest') {
        console.log(element.className);
        title.innerHTML = 'Capsule';
        cardImg.src = './assets/capsule.png';
        textCard.innerHTML =
          'It is a type of hotel developed in Japan, which features many small bed-sized rooms known as capsules. Capsule hotels provide cheap, basic overnight accommodation for guests who do not require or who cannot afford larger, more expensive rooms offered by more conventional hotels.';
      }
      if (element.className === 'place CANEast') {
        console.log(element.className);
        title.innerHTML = 'Cruise';
        cardImg.src = './assets/Cruise.png';
        textCard.innerHTML =
          'Cruise ships are large passenger ships used mainly for vacationing. Unlike ocean liners, which are used for transport, they typically embark on round-trip voyages to various ports-of-call, where passengers may go on tours known as “shore excursions.”';
      }
      if (element.className === 'place USA') {
        console.log(element.className);
        title.innerHTML = 'Hostel';
        cardImg.src = './assets/hostel.png';
        textCard.innerHTML =
          'A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. Private rooms may also be available, but the property must offer dormitories to be considered a hostel.';
      }
      if (element.className === 'place MEX') {
        console.log(element.className);
        title.innerHTML = 'Boutique Hotel';
        cardImg.src = './assets/boutique.png';
        textCard.innerHTML =
          'It is a type of hotel developed in Japan, which features many small bed-sized rooms known as capsules. Capsule hotels provide cheap, basic overnight accommodation for guests who do not require or who cannot afford larger, more expensive rooms offered by more conventional hotels.';
      }
      if (element.className === 'place COL') {
        console.log(element.className);
        title.innerHTML = 'Motel';
        cardImg.src = './assets/motel.png';
        textCard.innerHTML =
          'It is a hotel providing travelers with lodging and free parking facilities, typically a roadside hotel having rooms adjacent to an outside parking area or an urban hotel offering parking within the building.';
      }
      if (element.className === 'place BRA') {
        console.log(element.className);
        title.innerHTML = 'Apartment Hotel';
        cardImg.src = './assets/aparment_hotel.png';
        textCard.innerHTML =
          'A hotel rents furnished apartments or suites suitable for housekeeping, on a weekly or more permanent basis, and usually supplies all hotel services.';
      }
      if (element.className === 'place ARG') {
        console.log(element.className);
        title.innerHTML = 'Resort';
        cardImg.src = './assets/resort.png';
        textCard.innerHTML =
          'A place to which people frequently or generally go for relaxation or pleasure, especially one providing rest and recreation facilities for vacationers.';
      }
      if (element.className === 'place ENG') {
        console.log(element.className);
        title.innerHTML = 'Castle';
        cardImg.src = './assets/caslte.png';
        textCard.innerHTML =
          'A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders. Scholars debate the scope of the word castle, but usually consider it to be the private fortified residence of a lord or noble.';
      }
      if (element.className === 'place RUS') {
        console.log(element.className);
        title.innerHTML = 'Glamping';
        cardImg.src = './assets/Glamping.png';
        textCard.innerHTML =
          'Is a portmanteau of “glamorous” and “camping”, and describes a style of camping with amenities and, in some cases, resort-style services not usually associated with “traditional” camping. Glamping has become particularly popular with 21st-century tourists seeking the luxuries of hotel accommodation alongside “the escapism and adventure recreation of camping”';
      }
      if (element.className === 'place ESP') {
        console.log(element.className);
        title.innerHTML = 'Business Class Hotel';
        cardImg.src = './assets/Business_class_Hotel.png';
        textCard.innerHTML =
          'Business hotels are hotels located near the business district of the country/region they are in. They focus primarily on businesspersons, not providing too much family rooms. They are sure to provide you with fast internet and silent rooms, if they are good at least. Most of them also offer conference rooms, etc.';
      }
      if (element.className === 'place GRE') {
        console.log(element.className);
        title.innerHTML = 'CouchSurfing';
        cardImg.src = './assets/couch.png';
        textCard.innerHTML =
          'CouchSurfing is a service that connects members to a global community of travelers. Use CouchSurfing to find a place to stay or share your home and hometown with travelers. Couchsurfers organize regular events in 200,000 cities around the world. There is always something to do and new friends to meet. ';
      }
      if (element.className === 'place SEN') {
        console.log(element.className);
        title.innerHTML = 'Inn';
        cardImg.src = './assets/inn.png';
        textCard.innerHTML =
          'Inns are generally establishments or buildings where travelers can seek lodging, and usually, food and drink. Inns are typically located in the country or along a highway; before the advent of motorized transportation they also provided accommodation for horses.';
      }
      if (element.className === 'place SAF') {
        console.log(element.className);
        title.innerHTML = 'B&B';
        cardImg.src = './assets/bnb.png';
        textCard.innerHTML =
          'A bed and breakfast (typically shortened to B&B or BnB) is a small lodging establishment that offers overnight accommodation and breakfast. Bed and breakfasts are often private family homes and typically have between four and eleven rooms, with six being the average. In addition, a B&B usually has the hosts living in the house.';
      }
      if (element.className === 'place UAE') {
        console.log(element.className);
        title.innerHTML = 'Time Share / Condo Hotel';
        cardImg.src = './assets/time_condo.png';
        textCard.innerHTML =
          'A condo hotel, also known as a condotel, hotel condo or a contel, is a building which is legally a condominium but which is operated as a hotel, offering short term rentals, and which maintains a front desk. Condo hotels are typically high-rise buildings developed and operated as luxury hotels, usually in major cities and resorts.';
      }
      if (element.className === 'place CHI') {
        console.log(element.className);
        title.innerHTML = 'Lighthouse';
        cardImg.src = './assets/lighthouse.png';
        textCard.innerHTML =
          'A lighthouse is a tower, building, or another type of structure designed to emit light from a system of lamps and lenses and to serve as a navigational aid for maritime pilots at sea or on inland waterways.';
      }
      if (element.className === 'place AUS') {
        console.log(element.className);
        title.innerHTML = 'Tree House';
        cardImg.src = './assets/treehouse.png';
        textCard.innerHTML =
          'A tree house, tree fort or treeshed is a platform or building constructed around, next to or among the trunk or branches of one or more mature trees while above ground level. Tree houses can be used for recreation, workspace, habitation, a hangout space and observation.';
      }
      card.style.transform = 'translate(0, 0)';

      cardImg.style.opacity = '1';
      textCard.style.opacity = '1';
      title.style.opacity = '1';
    }, 400);
  });
});
