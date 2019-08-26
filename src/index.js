import "normalize.css";
import "./styles/style.scss";
import smoothscroll from "smoothscroll-polyfill";

// Element.scrollIntoView polyfill for Safari
smoothscroll.polyfill();

const mainContainer = document.getElementById("main-content");

// shows which section user is viewing
mainContainer.addEventListener("scroll", sectionHandler);

// smooth scrolling between sections
document
  .querySelectorAll("a[data-for]")
  .forEach(link => {
    const href = link.getAttribute("href");
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    });
  });

function sectionHandler() {
	// check if at least a quarter of the next section is in visible area
	const threshold = mainContainer.scrollTop + mainContainer.offsetHeight * 0.75;

	if (threshold > document.getElementById("kontakt").offsetTop) {
		setActive("kontakt");
	} else if (threshold > document.getElementById("portfolio").offsetTop) {
		setActive("portfolio");
	} else if (threshold > document.getElementById("co-umiem").offsetTop) {
		setActive("co-umiem");
	} else setActive("o-mnie");
}

function setActive(selector) {
	// remove active class from every link and set it to the current one
	const navLinks = Array.from(
		document.getElementsByClassName("navigation__link")
	);

	navLinks.forEach(elem => {
		elem.classList.remove("navigation__link--active");
	});

	document
		.querySelector(`.navigation__link[data-for=${selector}]`)
		.classList.add("navigation__link--active");
}

