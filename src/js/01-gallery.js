import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.forEach(galleryItem => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = `${galleryItem.original}`;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = `${galleryItem.preview}`;
  img.alt = `${galleryItem.description}`;
  img.title = `${galleryItem.description}`;
  gallery.append(li);
  li.append(a);
  a.append(img);
  li.addEventListener('click', event => {
    event.preventDefault();
  });
});

(function () {
  var $gallery = new SimpleLightbox('.gallery a', {});

  $gallery.options.captionDelay = 500;
  console.log($gallery.options);
})();
gallery.style.listStyle = 'none';
