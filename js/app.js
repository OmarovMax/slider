'use strict';

const photos = [
    { id: 1, src: './img/liked.svg', alt: 'liked', },
    { id: 2, src: './img/unliked.svg', alt: 'unliked', },
    { id: 3, src: './img/logo_alif.svg', alt: 'alif', },
    { id: 4, src: './img/logo_js.svg', alt: 'js', },
];

const viewerEl = document.querySelector('[data-id="viewer"]');
const photoEl = viewerEl.querySelector('[data-id="photo"]');
const prevEl = viewerEl.querySelector('[data-action="prev"]');
const nextEl = viewerEl.querySelector('[data-action="next"]');

let ind = 0;

const photoWidget = {
    rootEl: viewerEl,
    photoEl,
    prevEl,
    nextEl,
};

function bindPhotoToViewer(photosEl, el) {
    el.photoEl.src = photosEl.src;
    el.photoEl.alt = photosEl.alt;
    el.photoEl.id = photosEl.id;
}

bindPhotoToViewer(photos[ind], photoWidget);
photoWidget.prevEl.disabled = true;

const lim = 3;
photoWidget.nextEl.onclick = () => {
    ind++;
    photoWidget.prevEl.disabled = false;
    if (ind >= lim) {
        photoWidget.nextEl.disabled = true;
    } else {
        photoWidget.nextEl.disabled = false;
    }
    bindPhotoToViewer(photos[ind], photoWidget);
};



photoWidget.prevEl.onclick = () => {
    ind--;
    photoWidget.nextEl.disabled = false;
    if (ind === 0) {
        photoWidget.prevEl.disabled = true;
    } else {
        photoWidget.prevEl.disabled = false;
    }
    bindPhotoToViewer(photos[ind], photoWidget);
};

bindPhotoToViewer(photos[ind], photoWidget);
