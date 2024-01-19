// scroll to elem by btns
let buttonsGetStarted = document.querySelectorAll('.btn__get-started');
const startAnchor = document.querySelector('#start');

buttonsGetStarted.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    startAnchor.scrollIntoView();
  });
});
