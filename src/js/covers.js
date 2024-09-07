// Імпорт зображень
import powerPulsDesk from '/img/img-cover/power-puls-desk.jpg';
import powerPulsDesk2x from '/img/img-cover/power-puls-desk@2x.jpg';

import miminoDesk from '/img/img-cover/mimino-desk.jpg';
import miminoDesk2x from '/img/img-cover/mimino-desk@2x.jpg';

import ukranianDesk from '/img/img-cover/ukranian-desk.jpg';
import ukranianDesk2x from '/img/img-cover/ukranian-desk@2x.jpg';

import vegetablesDesk from '/img/img-cover/vegetables-desk.jpg';
import vegetablesDesk2x from '/img/img-cover/vegetables-desk@2x.jpg';

import financesDesk from '/img/img-cover/finances-desk.jpg';
import financesDesk2x from '/img/img-cover/finances-desk@2x.jpg';

import faceDesk from '/img/img-cover/face-desk.jpg';
import faceDesk2x from '/img/img-cover/face-desk@2x.jpg';

import bodyDesk from '/img/img-cover/body-desk.jpg';
import bodyDesk2x from '/img/img-cover/body-desk@2x.jpg';

import fruitsDesk from '/img/img-cover/fruits-desk.jpg';
import fruitsDesk2x from '/img/img-cover/fruits-desk@2x.jpg';

import englishDesk from '/img/img-cover/english-desk.jpg';
import englishDesk2x from '/img/img-cover/english-desk@2x.jpg';

import businesDesk from '/img/img-cover/busines-desk.jpg';
import businesDesk2x from '/img/img-cover/busines-desk@2x.jpg';

// Масив з імпортованими зображеннями
const imgCovers = [
  {
    src: powerPulsDesk,
    srcset: `${powerPulsDesk} 1x, ${powerPulsDesk2x} 2x`,
    alt: "A girl training at 'PowerPuls' gym",
  },
  {
    src: miminoDesk,
    srcset: `${miminoDesk} 1x, ${miminoDesk2x} 2x`,
    alt: "White title on black, left side shows a hotel facade",
  },
  {
    src: ukranianDesk,
    srcset: `${ukranianDesk} 1x, ${ukranianDesk2x} 2x`,
    alt: "Girl in embroidered shirt on gray",
  },
  {
    src: vegetablesDesk,
    srcset: `${vegetablesDesk} 1x, ${vegetablesDesk2x} 2x`,
    alt: "Basket of vegetables on green",
  },
  {
    src: financesDesk,
    srcset: `${financesDesk} 1x, ${financesDesk2x} 2x`,
    alt: "Couple with laptop, credit card",
  },
  {
    src: faceDesk,
    srcset: `${faceDesk} 1x, ${faceDesk2x} 2x`,
    alt: "Woman's face on brown, white title",
  },
  {
    src: bodyDesk,
    srcset: `${bodyDesk} 1x, ${bodyDesk2x} 2x`,
    alt: "Girl with dumbbells, black title",
  },
  {
    src: fruitsDesk,
    srcset: `${fruitsDesk} 1x, ${fruitsDesk2x} 2x`,
    alt: "Title with orange, citrus fruits",
  },
  {
    src: englishDesk,
    srcset: `${englishDesk} 1x, ${englishDesk2x} 2x`,
    alt: "Schoolgirl writing at desk",
  },
  {
    src: businesDesk,
    srcset: `${businesDesk} 1x, ${businesDesk2x} 2x`,
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

