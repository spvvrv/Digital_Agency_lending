// create help cards
const CARDS_CONTAINER = document.querySelector('.help__cards');

let cardsContent = [
  {
    icon: './images/svg/icon-1.svg',
    iconColor: 'orange',
    title: 'Grow your business',
    text: '<b>The magic wand </b>for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.',
  },
  {
    icon: './images/svg/icon-2.svg',
    iconColor: 'green',
    title: 'Drive more sales',
    text: 'A potential customer, once lost, is hard to retain back. But <b>keeping some critical</b> factors in mind, we can, for sure, use these loyalty programs as customer retention tools.',
  },
  {
    icon: './images/svg/icon-3.svg',
    iconColor: 'yellow',
    title: 'Handle by Expert',
    text: 'We know how we candevelop deep, trust-based relationships with ourclients, and work together more collaboratively',
  },
  {
    icon: './images/svg/icon-4.svg',
    iconColor: 'dark-green',
    title: 'UX Research',
    text: 'UX research is the systematic study of target users and theirrequirements, to add realistic contexts and insights to design processes.',
  },
  {
    icon: './images/svg/icon-5.svg',
    iconColor: 'purple',
    title: 'Business Audit',
    text: "An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions.",
  },
  {
    icon: './images/svg/icon-6.svg',
    iconColor: 'blue',
    title: 'Data tracking',
    text: 'The hardware and software, which when used together allows you to know where something is at any point in time',
  },
];

cardsContent.forEach((cardData) => {
  const CARD = document.createElement('div');
  const CARD_CONTENT = document.createElement('div');
  const ICON_CONTAINER = document.createElement('div');
  const ICON_SRC = document.createElement('img');
  const TITLE = document.createElement('h4');
  const TEXT = document.createElement('p');

  CARD.classList.add('help__cards-card', 'card');
  CARD_CONTENT.classList.add('help__cards-card-content', 'card__content');
  ICON_CONTAINER.classList.add(
    'card__content-icon',
    `icon-${cardData.iconColor}`
  );
  TITLE.classList.add('help__cards-card-title', 'card-title');
  TEXT.classList.add('help__cards-card-text', 'card-text');

  ICON_SRC.src = cardData.icon;
  TITLE.textContent = cardData.title;
  TEXT.innerHTML = cardData.text;

  ICON_CONTAINER.appendChild(ICON_SRC);
  CARD_CONTENT.appendChild(ICON_CONTAINER);
  CARD_CONTENT.appendChild(TITLE);
  CARD_CONTENT.appendChild(TEXT);
  CARD.appendChild(CARD_CONTENT);

  CARDS_CONTAINER.appendChild(CARD);
});
