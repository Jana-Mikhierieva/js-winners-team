'use strict';

// Масив з зображеннями
const imgCovers = [
  {
    src: "/img/img-cover/power-puls-desk.jpg",
    srcset: "/img/img-cover/power-puls-desk.jpg 1x, /img/img-cover/power-puls-desk@2x.jpg 2x",
    alt: "A girl training at 'PowerPuls' gym",
  },
  {
    src: "/img/img-cover/mimino-desk.jpg",
    srcset: "/img/img-cover/mimino-desk.jpg 1x, /img/img-cover/mimino-desk@2x.jpg 2x",
    alt: "White title on black, left side shows a hotel facade",
  },
  {
    src: "/img/img-cover/ukranian-desk.jpg",
    srcset: "/img/img-cover/ukranian-desk.jpg 1x, /img/img-cover/ukranian-desk@2x.jpg 2x",
    alt: "Girl in embroidered shirt on gray",
  },
  {
    src: "/img/img-cover/vegetables-desk.jpg",
    srcset: "/img/img-cover/vegetables-desk.jpg 1x, /img/img-cover/vegetables-desk@2x.jpg 2x",
    alt: "Basket of vegetables on green",
  },
  {
    src: "/img/img-cover/finances-desk.jpg",
    srcset: "/img/img-cover/finances-desk.jpg 1x, /img/img-cover/finances-desk@2x.jpg 2x",
    alt: "Couple with laptop, credit card",
    },
  {
    src: "/img/img-cover/face-desk.jpg",
    srcset: "/img/img-cover/face-desk.jpg 1x, /img/img-cover/face-desk@2x.jpg 2x",
    alt: "Woman's face on brown, white title",
    },
  {
    src: "/img/img-cover/body-desk.jpg",
    srcset: "/img/img-cover/body-desk.jpg 1x, /img/img-cover/body-desk@2x.jpg 2x",
    alt: "Girl with dumbbells, black title",
    },
  {
    src: "/img/img-cover/fruits-desk.jpg",
    srcset: "/img/img-cover/fruits-desk.jpg 1x, /img/img-cover/fruits-desk@2x.jpg 2x",
    alt: "Title with orange, citrus fruits",
  },
  {
    src: "/img/img-cover/english-desk.jpg",
    srcset: "/img/img-cover/english-desk.jpg 1x, /img/img-cover/english-desk@2x.jpg 2x",
    alt: "Schoolgirl writing at desk",
    },
  {
    src: "/img/img-cover/busines-desk.jpg",
    srcset: "/img/img-cover/busines-desk.jpg 1x, /img/img-cover/busines-desk@2x.jpg 2x",
    alt: "White title on black background",
  }
];

// Функція для створення шаблону елемента
const createItemGalleryTemplate = (imgCover) => {
    return `
    <li class="covers-gallery-item">
            <picture class="covers-img">
              <source media="(min-width: 768px)"
                srcset="${imgCover.srcset}" 
                width="544" 
                height="314" />
              <source media="(min-width: 320px)" 
                srcset="${imgCover.srcset}" 
                width="282" 
                height="163" />
              <img src="${imgCover.src}" alt="${imgCover.alt}" />
            </picture>
          </li>
    `;
};

// Функція для генерації необхідної кількості елементів
const createGalleryItems = (items, numberOfItems) => {
  const repeatedItems = [];
  for (let i = 0; i < numberOfItems; i++) {
    repeatedItems.push(createItemGalleryTemplate(items[i % items.length]));
  }
  return repeatedItems.join('');
};

// Функція для визначення типу пристрою
const loadGalleryBasedOnDevice = () => {
  const width = window.innerWidth;

  let numberOfItems = 40
    if (width >= 1024) {
        numberOfItems = 50; // Desktop
    }

  const galleryItemsTemplate = createGalleryItems(imgCovers, numberOfItems);

  const coversGalleryEl = document.querySelector('.covers-gallery-js');
  if (coversGalleryEl) {
    coversGalleryEl.innerHTML = galleryItemsTemplate;
  }
};

// Завантаження галереї на завантаження сторінки і при зміні розміру вікна
window.addEventListener('load', loadGalleryBasedOnDevice);
window.addEventListener('resize', loadGalleryBasedOnDevice);

