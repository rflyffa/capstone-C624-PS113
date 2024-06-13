/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
/* eslint-disable eol-last */
import 'regenerator-runtime';
import '../styles/main.css';
import renderNavbar from '../scripts/navbar.js';
import renderCarousel from './view/home/carousel.js';
import renderFooter from '../scripts/footer.js';

// Membuat elemen <div> untuk menampung navbar, carousel, dan footer
const navbarContainer = document.createElement('div');
const carouselContainer = document.createElement('div');
const footerContainer = document.createElement('div');

// Memasukkan kode HTML navbar, carousel, dan footer ke dalam elemen <div>
navbarContainer.innerHTML = renderNavbar();
carouselContainer.innerHTML = renderCarousel();
footerContainer.innerHTML = renderFooter();

// Menambahkan elemen <div> ke dalam body HTML
document.body.prepend(navbarContainer);
document.body.insertBefore(carouselContainer, navbarContainer);
document.body.append(footerContainer);
