import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

function creatGalleryMarkup(items) { 
    return items.map((item) => `
    <a class="gallery__item" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        `).join('');    
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
}
    function blockStandartAction(evt) {
    evt.preventDefault();
    }


let galleryLightbox = new SimpleLightbox('.gallery a');
galleryLightbox.on('show.simplelightbox', function () { 
    captionsData(); 
});



galleryLightbox.on('close.simplelightbox', function () {
    console.log('Close');
}
    
);

