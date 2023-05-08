// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryList = document.querySelector('ul.gallery');

const insertHtmlImg = () => {
  textHtml = galleryItems
    .map(
      item => `<li class="gallery__item">
             <a class="gallery__link" href="${item.original}">
             <img class="gallery__image" 
             src=${item.preview}              
             alt=${item.description}/>
             </a>
             </li>`
    )
    .join('\n');
  galleryList.insertAdjacentHTML('afterbegin', textHtml);
};
insertHtmlImg();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// let newList = [];

// newList = galleryItems.map(item => {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery__item');

//   const link = document.createElement('a');
//   link.classList.add('gallery__link');
//   link.href = item.original;

//   const image = document.createElement('img');
//   image.classList.add('gallery__image');
//   image.src = item.preview;
//   image.alt = item.description;

//   link.append(image);
//   galleryItem.append(link);
//   return galleryItem;
// });

// galleryList.append(...newList);
