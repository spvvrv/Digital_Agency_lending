// footer media
const footerMedia = document.getElementById('dynamicFooterMedia');
const socialMediaIcons = [
  './images/png/Facebook.png',
  './images/png/Instagram.png',
  './images/png/Twitter.png',
];
const socialMediaLinks = [
  'https://facebook.com/#',
  'https://instagram.com/spvvrv',
  'https://twitter.com/#',
];

socialMediaIcons.forEach((icon, index) => {
  const img = document.createElement('img');
  img.src = icon;
  footerMedia.appendChild(img);

  const anchor = document.createElement('a');
  anchor.href = socialMediaLinks[index];
  anchor.target = '_blank';
  anchor.appendChild(img);

  footerMedia.appendChild(anchor);
});
