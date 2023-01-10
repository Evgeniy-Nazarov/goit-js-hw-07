import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

function creatGalleryMarkup(items) { 
    return items.map((item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </div>`).join('');    
}

const addGalleryMarkup = creatGalleryMarkup(galleryItems);
console.log(addGalleryMarkup);

gallery.innerHTML = addGalleryMarkup;
gallery.addEventListener('click', onImageClick);

function onImageClick(evt) { 
    blockStandartAction(evt);

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    gallery.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
}

function blockStandartAction(evt) {
    evt.preventDefault();
}
