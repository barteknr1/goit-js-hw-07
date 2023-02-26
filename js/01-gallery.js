import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


galleryItems.forEach((item) => {
    const galleryItem = `<div class="gallery__item">
        <a class="gallery__link"
        href ="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        title="${item.description}" /></a></div>`
    gallery.insertAdjacentHTML('beforeend', galleryItem);
})

const selectImage = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const imageSource = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageSource}" />`);
    instance.show();
}

    gallery.addEventListener('click', selectImage);

    document.addEventListener("keydown", event => {
        if (event.key = 'Escape') {
            instance.close();
        }
    });
