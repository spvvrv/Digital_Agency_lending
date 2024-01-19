// brands

const logosData = [
  './images/svg/mazda.svg',
  './images/svg/atl.svg',
  './images/svg/smashing.svg',
  './images/svg/qantas.svg',
  './images/svg/buy.svg',
  './images/svg/nitro.svg',
  './images/svg/css.svg',
  './images/svg/pop.svg',
  './images/svg/talent.svg',
  './images/svg/civi.svg',
];

const brandsLogotypesContainer = document.getElementById('brandsLogotypes');

logosData.forEach((logoSrc) => {
  const logotype = document.createElement('div');
  logotype.classList.add('logotype');

  const img = document.createElement('img');
  img.src = logoSrc;
  img.alt = '';

  logotype.appendChild(img);
  brandsLogotypesContainer.appendChild(logotype);
});
