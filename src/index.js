import './styles.css';
import cardsItem from './tamplates/cards.hbs';
import refs from './refs.js';
import Theme from './theme.js';
import card from './menu.json';
const { LIGHT, DARK } = Theme;

const { menu, input, body } = refs;
const menuItem = cardsItem(card);

menu.insertAdjacentHTML('afterbegin', menuItem);

input.addEventListener('change', changeTheme);
document.addEventListener('DOMContentLoaded', theme);

function changeTheme(event) {
  if (event.target.checked) {
    changeCurrentTheme(LIGHT, DARK);
  } else {
    changeCurrentTheme(DARK, LIGHT);
  }
}
const changeCurrentTheme = function (oldTheme, newTheme) {
  localStorage.setItem('theme', newTheme);
  body.classList.add(newTheme);
  body.classList.remove(oldTheme);
};

function theme() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === DARK) {
    body.classList.add(DARK);
    input.checked = true;
  }
}
