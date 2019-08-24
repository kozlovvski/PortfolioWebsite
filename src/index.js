import 'normalize.css';
import './styles/style.scss';


function adjustNav() {
  const nav = document.querySelector(".navigation")
  const ul = document.querySelector(".navigation__container")
  nav.style.width = ul.offsetHeight + "px";
}