import './styles.css';
import cardsItem from './tamplates/cards.hbs';
import refs from './refs.js';
import card from './menu.json';
import theme from'./theme.js'
const {LIGHT,DARK}= theme
const { menu, input, body } = refs;
const menuItem = cardsItem(card);

menu.insertAdjacentHTML('afterbegin', menuItem);

input.addEventListener('change', changeTheme);

function changeTheme(event) {
  if (event.target.checked) {
      localStorage.setItem('theme','dark')
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    
  }
}

