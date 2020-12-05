import './styles.css';
import cardsItem from './tamplates/cards.hbs';
import refs from './refs.js';
import card from './menu.json';

const { menu, input, body } = refs;
const menuItem = cardsItem(card);

menu.insertAdjacentHTML('afterbegin', menuItem);

input.addEventListener('change', changeTheme);
document.addEventListener('DOMContentLoaded', Theme);

function changeTheme(event) {
  if (event.target.checked) {
    localStorage.setItem('theme', 'dark');
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

function Theme() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    input.checked = true;
  }
}
