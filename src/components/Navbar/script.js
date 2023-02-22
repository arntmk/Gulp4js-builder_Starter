// https://www.youtube.com/watch?v=7teaFMUczXk

const menu = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-button');

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', (e) => {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('navbar')) {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('lock');
		}
	});

	menu.querySelectorAll('.nav__li-link').forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('lock');
		});
	});
}

/* =========================================== */

// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach((anchor) => {
//   anchor.addEventListener('click', (event) => {
//     event.preventDefault();

//     const blockID = anchor.getAttribute('href').substring(1);

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   });
// });
