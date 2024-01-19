//footer header navigation

const menuItemsHeader = [
  { text: 'Home', link: '#starting' },
  { text: 'Your benefits', link: '#help' },
  { text: 'Our process', link: '#process' },
  { text: 'Our works', link: '#brands' },
  { text: 'Testimonials', link: '#brands' },
  { text: 'Start a project', link: '#start' },
];

const menuItemsFooter = [...menuItemsHeader]; // Копируем массив для футера

const populateMenu = (menuId, items) => {
  const menuList = document.getElementById(menuId);

  items.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    link.href = item.link;
    link.classList.add('menu__link');
    link.textContent = item.text;

    li.appendChild(link);
    menuList.appendChild(li);
  });
};

populateMenu('dynamicMenuHeader', menuItemsHeader);
populateMenu('dynamicMenuFooter', menuItemsFooter);
