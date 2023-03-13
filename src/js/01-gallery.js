import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  src="${preview}" 
  alt="${description}"
  />
</a>`
}).join("");

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 300,
    closeText: "&#9785;&#65039;",
    navText:["&#128072;","&#128073;"]
});