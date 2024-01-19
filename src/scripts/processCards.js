// process cards

const processCardsContainer = document.querySelector('.process__cards');

const processCardsData = [
  {
    imgSrc: './images/png/process/process-card__1.png',
    iconSrc: './images/svg/icon-7.svg',
    iconColor: 'icon-blue-dark',
    title: 'Business Audit',
    text: "An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions.",
  },
  {
    imgSrc: './images/png/process/process-card__2.png',
    iconSrc: './images/svg/icon-8.svg',
    iconColor: 'icon-pink',
    title: 'Data tracking',
    text: 'The hardware and software, which when used together allows you to know where something is at any point in time.',
  },
  {
    imgSrc: './images/png/process/process-card__3.png',
    iconSrc: './images/svg/icon-9.svg',
    iconColor: 'icon-blue',
    title: 'Results',
    text: "An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions.",
  },
];

processCardsData.forEach((cardData) => {
  const card = document.createElement('div');
  card.classList.add('process__cards-card');

  const cardImg = document.createElement('div');
  cardImg.classList.add('card__img');
  const img = document.createElement('img');
  img.src = cardData.imgSrc;
  img.alt = '';
  cardImg.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.classList.add('process__cards-card-content', 'card__content');

  const cardIcon = document.createElement('div');
  cardIcon.classList.add('card__content-icon', cardData.iconColor);
  const iconImg = document.createElement('img');
  iconImg.src = cardData.iconSrc;
  iconImg.alt = '';
  cardIcon.appendChild(iconImg);

  const title = document.createElement('h4');
  title.classList.add('card__content-title', 'card-title');
  title.textContent = cardData.title;

  const text = document.createElement('p');
  text.classList.add('card__content-text', 'card-text');
  text.textContent = cardData.text;

  cardContent.appendChild(cardIcon);
  cardContent.appendChild(title);
  cardContent.appendChild(text);

  card.appendChild(cardImg);
  card.appendChild(cardContent);

  processCardsContainer.appendChild(card);
});
