const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', onMenuClick);
  });
});

function onMenuClick(e) {
  e.preventDefault();
  const menuLink = e.target;
  const gotoBlockSelector = menuLink.getAttribute('href');

  if (gotoBlockSelector && document.querySelector(gotoBlockSelector)) {
    const gotoBlock = document.querySelector(gotoBlockSelector);
    console.log(gotoBlock);

    // Вычислить позицию блока относительно верхней части страницы
    const gotoBlockPosition =
      gotoBlock.getBoundingClientRect().top + window.pageYOffset;
    if (
      iconMenu.classList.contains('_active') ||
      menuBody.classList.contains('_active')
    ) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
    }

    window.scrollTo({
      top: gotoBlockPosition,
    });
  }
}
