import{a,i as c,S as l}from"./assets/vendor-CXn_AOly.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const d=[{src:"/img/img-cover/power-puls-desk.jpg",srcset:"/img/img-cover/power-puls-desk.jpg 1x, /img/img-cover/power-puls-desk@2x.jpg 2x",alt:"A girl training at 'PowerPuls' gym"},{src:"/img/img-cover/mimino-desk.jpg",srcset:"/img/img-cover/mimino-desk.jpg 1x, /img/img-cover/mimino-desk@2x.jpg 2x",alt:"White title on black, left side shows a hotel facade"},{src:"/img/img-cover/ukranian-desk.jpg",srcset:"/img/img-cover/ukranian-desk.jpg 1x, /img/img-cover/ukranian-desk@2x.jpg 2x",alt:"Girl in embroidered shirt on gray"},{src:"/img/img-cover/vegetables-desk.jpg",srcset:"/img/img-cover/vegetables-desk.jpg 1x, /img/img-cover/vegetables-desk@2x.jpg 2x",alt:"Basket of vegetables on green"},{src:"/img/img-cover/finances-desk.jpg",srcset:"/img/img-cover/finances-desk.jpg 1x, /img/img-cover/finances-desk@2x.jpg 2x",alt:"Couple with laptop, credit card"},{src:"/img/img-cover/face-desk.jpg",srcset:"/img/img-cover/face-desk.jpg 1x, /img/img-cover/face-desk@2x.jpg 2x",alt:"Woman's face on brown, white title"},{src:"/img/img-cover/body-desk.jpg",srcset:"/img/img-cover/body-desk.jpg 1x, /img/img-cover/body-desk@2x.jpg 2x",alt:"Girl with dumbbells, black title"},{src:"/img/img-cover/fruits-desk.jpg",srcset:"/img/img-cover/fruits-desk.jpg 1x, /img/img-cover/fruits-desk@2x.jpg 2x",alt:"Title with orange, citrus fruits"},{src:"/img/img-cover/english-desk.jpg",srcset:"/img/img-cover/english-desk.jpg 1x, /img/img-cover/english-desk@2x.jpg 2x",alt:"Schoolgirl writing at desk"},{src:"/img/img-cover/busines-desk.jpg",srcset:"/img/img-cover/busines-desk.jpg 1x, /img/img-cover/busines-desk@2x.jpg 2x",alt:"White title on black background"}],m=i=>`
    <li class="covers-gallery-item">
            <picture class="covers-img">
              <source media="(min-width: 768px)"
                srcset="${i.srcset}" 
                width="544" 
                height="314" />
              <source media="(min-width: 320px)" 
                srcset="${i.srcset}" 
                width="282" 
                height="163" />
              <img src="${i.src}" alt="${i.alt}" />
            </picture>
          </li>
    `,p=(i,t)=>{const n=[];for(let r=0;r<t;r++)n.push(m(i[r%i.length]));return n.join("")},g=()=>{const i=window.innerWidth;let t=40;i>=1024&&(t=50);const n=p(d,t),r=document.querySelector(".covers-gallery-js");r&&(r.innerHTML=n)};window.addEventListener("load",g);window.addEventListener("resize",g);a.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function u(){const i=document.querySelector(".js-text-error"),t=document.querySelector(".js-reviews-btn");try{const n=await a.get("/reviews");if(n.data.length===0){t.classList.add("reviews__error"),i.classList.remove("reviews__error"),c.error({message:"Oops...Something went wrong!",position:"bottomRight"});return}return n.data}catch{t.classList.add("reviews__error"),i.classList.remove("reviews__error"),c.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}const v=document.querySelector(".js-reviews");window.onload=async()=>{const i=await u();function t(s){return s.map(o=>`
          <li class="reviews__item swiper-slide">
            <img 
              class="reviews__image" 
              src="${o.avatar_url}" 
              alt="commentator's photo" 
            />
            <h4 class="reviews__title">${o.author}</h4>
            <p class="reviews__text">${o.review}</p>
          </li>`).join("")}function n(s,o){v.insertAdjacentHTML("beforeend",s(o))}n(t,i);const r=new l(".swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".reviews__btn--next",prevEl:".reviews__btn--prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30},1440:{slidesPerView:4,spaceBetween:40}}});r.init();function e(){const s=document.querySelector(".js-swiper-prev"),o=document.querySelector(".js-swiper-next");r.isBeginning?s.classList.add("reviews__disabled"):s.classList.remove("reviews__disabled"),r.isEnd?o.classList.add("reviews__disabled"):o.classList.remove("reviews__disabled")}e(),r.on("slideChange",e)};
//# sourceMappingURL=index.js.map
