import './styles.css';
import cardsItem from './tamplates/cards.hbs';
import  refs from './refs.js';
import card from './menu.json';
// const menu =document.querySelector('.menu')
const{menu,input}=refs
const menuItem=cardsItem(card);

menu.insertAdjacentHTML('afterbegin', menuItem)
