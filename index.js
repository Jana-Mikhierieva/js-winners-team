import{A as S,S as L,a as B,i as g}from"./assets/vendor-BAgoJbq_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const f="/js-winners-team/assets/power-puls-CAR0I2Hr.png",C="/js-winners-team/assets/power-puls@2x-DfqaEtzv.png",b="/js-winners-team/assets/mimino-DW-6eCSM.png",E="/js-winners-team/assets/mimino@2x-Ct__Kg0f.png",v="/js-winners-team/assets/ukranian-CWLdLCmZ.png",A="/js-winners-team/assets/ukranian@2x-HArDxWck.png",x="/js-winners-team/assets/vegetables-DlrhDgVy.png",I="/js-winners-team/assets/vegetables@2x-qHKRnh7C.png",h="/js-winners-team/assets/finances-0s2aRETz.png",P="/js-winners-team/assets/finances@2x-CHWYYREp.png",y="/js-winners-team/assets/face-DW0gD83_.png",O="/js-winners-team/assets/face@2x-D4X0Y-PD.png",k="/js-winners-team/assets/body-BfEj9f96.png",R="/js-winners-team/assets/body@2x-BZl3QsGP.png",_="/js-winners-team/assets/fruits-6id4-Z-o.png",W="/js-winners-team/assets/fruits@2x-CWBpmrvj.png",j="/js-winners-team/assets/english-OAl_yic7.png",H="/js-winners-team/assets/english@2x-CyukS5XP.png",D="/js-winners-team/assets/busines-B8XQfsSH.png",T="/js-winners-team/assets/busines@2x-BcBZRin9.png",G=[{src:f,srcset:`${f} 1x, ${C} 2x`,alt:"A girl training at 'PowerPuls' gym"},{src:b,srcset:`${b} 1x, ${E} 2x`,alt:"White title on black, left side shows a hotel facade"},{src:v,srcset:`${v} 1x, ${A} 2x`,alt:"Girl in embroidered shirt on gray"},{src:x,srcset:`${x} 1x, ${I} 2x`,alt:"Basket of vegetables on green"},{src:h,srcset:`${h} 1x, ${P} 2x`,alt:"Couple with laptop, credit card"},{src:y,srcset:`${y} 1x, ${O} 2x`,alt:"Woman's face on brown, white title"},{src:k,srcset:`${k} 1x, ${R} 2x`,alt:"Girl with dumbbells, black title"},{src:_,srcset:`${_} 1x, ${W} 2x`,alt:"Title with orange, citrus fruits"},{src:j,srcset:`${j} 1x, ${H} 2x`,alt:"Schoolgirl writing at desk"},{src:D,srcset:`${D} 1x, ${T} 2x`,alt:"White title on black background"}],M=e=>`
    <li class="covers-gallery-item">
            <picture class="covers-img">
              <source media="(min-width: 768px)"
                srcset="${e.srcset}" 
                width="544" 
                height="314" />
              <source media="(min-width: 320px)" 
                srcset="${e.srcset}" 
                width="282" 
                height="163" />
              <img src="${e.src}" alt="${e.alt}" />
            </picture>
          </li>
    `,V=(e,s)=>{const r=[];for(let n=0;n<s;n++)r.push(M(e[n%e.length]));return r.join("")},q=()=>{const e=window.innerWidth;let s=40;e>=1024&&(s=50);const r=V(G,s),n=document.querySelector(".covers-gallery-js");n&&(n.innerHTML=r)};window.addEventListener("load",q);window.addEventListener("resize",q);document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new S(e,{duration:400,showFirstItem:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-box-answer",headerClass:"faq-item-title"})});const z=document.querySelectorAll(".faq-item");z.forEach(e=>{e.addEventListener("click",function(){this.querySelector(".faq-arrow").classList.toggle("rotate")})});const Z=document.querySelector(".desktop-menu-btn"),K=document.querySelector(".navigation-menu");Z.addEventListener("click",()=>{K.classList.toggle("is-open")});new L(".swiper",{loop:!0,navigation:{nextEl:".right-button",prevEl:".left-button"}});console.log("Hello!");B.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function X(){const e=document.querySelector(".js-text-error"),s=document.querySelector(".js-reviews-btn");try{const r=await B.get("/reviews");if(r.data.length===0){s.classList.add("reviews__error"),e.classList.remove("reviews__error"),g.error({message:"Oops...Something went wrong!",position:"bottomRight"});return}return r.data}catch{s.classList.add("reviews__error"),e.classList.remove("reviews__error"),g.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}const Y=document.querySelector(".js-reviews");window.onload=async()=>{const e=await X();N(F,e);const s=new L(".swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".reviews__btn--next",prevEl:".reviews__btn--prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}}),r={prevButton:document.querySelector(".reviews__btn--prev"),nextButton:document.querySelector(".reviews__btn--next"),prevIcon:document.querySelector(".js-review-icon-prev"),nextIcon:document.querySelector(".js-review-icon-next")},n={disabledBtnClass:"reviews__btn--disabled",disabledIconClass:"reviews__icon--disabled",disabledAttribute:"disabled"};$(s,r,n),s.on("slideChange",()=>$(s,r,n))};function F(e){return e.map(s=>`
      <li class="reviews__item swiper-slide">
        <img 
          class="reviews__image" 
          src="${s.avatar_url}" 
          alt="commentator's photo" 
        />
        <h4 class="reviews__title">${s.author}</h4>
        <p class="reviews__text">${s.review}</p>
      </li>`).join("")}function N(e,s){Y.insertAdjacentHTML("beforeend",e(s))}function $(e,s,r){const{prevButton:n,nextButton:t,prevIcon:i,nextIcon:o}=s,{disabledBtnClass:u,disabledIconClass:w,disabledAttribute:m}=r,l=(a,d,c)=>{d?a.classList.add(c):a.classList.remove(c)},p=(a,d,c)=>{d?a.setAttribute(c,"true"):a.removeAttribute(c)};l(n,e.isBeginning,u),l(i,e.isBeginning,w),p(n,e.isBeginning,m),l(t,e.isEnd,u),l(o,e.isEnd,w),p(t,e.isEnd,m)}
//# sourceMappingURL=index.js.map
