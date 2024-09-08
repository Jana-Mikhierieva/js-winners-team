import{g as W,A as z,S as F,a as E,i as h,$ as N}from"./assets/vendor-DY2IAczS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();new W({elements_selector:".lazy"});const X=new z(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){let t=e.querySelector(".ac-panel");t.style.maxHeight=t.scrollHeight+"px"}});X.open(0);document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{let t=e.closest(".ac").querySelector(".ac-panel");t.style.maxHeight=t.scrollHeight+"px"})});const S="/js-winners-team/assets/power-puls-CAR0I2Hr.png",Y="/js-winners-team/assets/power-puls@2x-DfqaEtzv.png",B="/js-winners-team/assets/mimino-DW-6eCSM.png",Q="/js-winners-team/assets/mimino@2x-Ct__Kg0f.png",j="/js-winners-team/assets/ukranian-CWLdLCmZ.png",U="/js-winners-team/assets/ukranian@2x-HArDxWck.png",C="/js-winners-team/assets/vegetables-DlrhDgVy.png",J="/js-winners-team/assets/vegetables@2x-qHKRnh7C.png",$="/js-winners-team/assets/finances-0s2aRETz.png",ee="/js-winners-team/assets/finances@2x-CHWYYREp.png",_="/js-winners-team/assets/face-DW0gD83_.png",te="/js-winners-team/assets/face@2x-D4X0Y-PD.png",D="/js-winners-team/assets/body-BfEj9f96.png",se="/js-winners-team/assets/body@2x-BZl3QsGP.png",P="/js-winners-team/assets/fruits-6id4-Z-o.png",ne="/js-winners-team/assets/fruits@2x-CWBpmrvj.png",I="/js-winners-team/assets/english-OAl_yic7.png",oe="/js-winners-team/assets/english@2x-CyukS5XP.png",A="/js-winners-team/assets/busines-B8XQfsSH.png",re="/js-winners-team/assets/busines@2x-BcBZRin9.png",R=[{src:S,srcset:`${S} 1x, ${Y} 2x`,alt:"A girl training at 'PowerPuls' gym"},{src:B,srcset:`${B} 1x, ${Q} 2x`,alt:"White title on black, left side shows a hotel facade"},{src:j,srcset:`${j} 1x, ${U} 2x`,alt:"Girl in embroidered shirt on gray"},{src:C,srcset:`${C} 1x, ${J} 2x`,alt:"Basket of vegetables on green"},{src:$,srcset:`${$} 1x, ${ee} 2x`,alt:"Couple with laptop, credit card"},{src:_,srcset:`${_} 1x, ${te} 2x`,alt:"Woman's face on brown, white title"},{src:D,srcset:`${D} 1x, ${se} 2x`,alt:"Girl with dumbbells, black title"},{src:P,srcset:`${P} 1x, ${ne} 2x`,alt:"Title with orange, citrus fruits"},{src:I,srcset:`${I} 1x, ${oe} 2x`,alt:"Schoolgirl writing at desk"},{src:A,srcset:`${A} 1x, ${re} 2x`,alt:"White title on black background"}],ie=e=>`
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
    `,ae=e=>`
    <ul class="covers-gallery-row">
      ${e.map(ie).join("")}
    </ul>
  `,ce=(e,t)=>{const n=[];for(let s=0;s<t;s++){const o=s*10,c=e.slice(o,o+10);n.push(ae(c))}return n.join("")},G=()=>{const e=document.documentElement.clientWidth;let t=4;e>=1024&&(t=5);const n=[];for(let o=0;o<t*10;o++)n.push(R[o%R.length]);const r=ce(n,t),s=document.querySelector(".covers-gallery-js");s&&(s.innerHTML=r)};window.addEventListener("load",G);window.addEventListener("resize",G);document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new z(e,{duration:400,showFirstItem:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-box-answer",headerClass:"faq-item-title",beforeOpen:t=>{const n=t.querySelector(".faq-box-answer");n.style.display="block"},beforeClose:t=>{const n=t.querySelector(".faq-box-answer");n.style.display="none"}})});const le=document.querySelectorAll(".faq-item");le.forEach(e=>{e.addEventListener("click",function(){this.querySelector(".faq-arrow").classList.toggle("rotate")})});const de=document.querySelector(".desktop-menu-btn"),L=document.querySelector(".navigation-menu");de.addEventListener("click",()=>{L.classList.toggle("is-open")});L.addEventListener("click",e=>{e.target.nodeName==="A"&&L.classList.remove("is-open")});const x=document.querySelector(".mobile-menu"),ue=document.querySelector(".burger-btn"),me=document.querySelector(".close-btn");ue.addEventListener("click",()=>{x.classList.add("is-open")});me.addEventListener("click",()=>{x.classList.remove("is-open")});x.addEventListener("click",e=>{e.target.nodeName==="A"&&x.classList.remove("is-open")});const v=document.querySelector(".js-modal"),pe=document.querySelector(".js-close-modal"),we=document.querySelector(".js-open-modal");function ge(){v.classList.add("is-open"),document.addEventListener("keydown",Z),v.addEventListener("click",K)}function q(){v.classList.remove("is-open"),document.removeEventListener("keydown",Z),v.removeEventListener("click",K)}function Z(e){e.key==="Escape"&&q()}function K(e){e.target===v&&q()}we.addEventListener("click",ge);pe.addEventListener("click",q);const y={prevButton:document.querySelector(".left-button"),nextButton:document.querySelector(".right-button"),prevIcon:document.querySelector(".left-icon"),nextIcon:document.querySelector(".right-icon")},O={disabledBtnClass:"button-disabled-projects",disabledIconClass:"icon-disabled",disabledAttribute:"disabled"};new F(".swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".right-button",prevEl:".left-button"},on:{init:function(){M(this,y,O)},slideChange:function(){M(this,y,O)}},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1,spaceBetween:16},1440:{slidesPerView:1,spaceBetween:16}}});function M(e,t,n){const{prevButton:r,nextButton:s,prevIcon:o,nextIcon:c}=t,{disabledBtnClass:p,disabledIconClass:w,disabledAttribute:g}=n,l=(i,d,a)=>{d?i.classList.add(a):i.classList.remove(a)},f=(i,d,a)=>{d?i.setAttribute(a,"true"):i.removeAttribute(a)};l(r,e.isBeginning,p),l(o,e.isBeginning,w),f(r,e.isBeginning,g),l(s,e.isEnd,p),l(c,e.isEnd,w),f(s,e.isEnd,g)}y.nextButton.disabled=!1;y.nextButton.classList.remove("button-disabled-projects");y.nextIcon.classList.remove("icon-disabled");E.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function fe(){const e=document.querySelector(".js-text-error"),t=document.querySelector(".js-reviews-btn");try{const n=await E.get("/reviews");if(n.data.length===0){t.classList.add("reviews__error"),e.classList.remove("reviews__error"),h.error({message:"Oops...Something went wrong!",position:"bottomRight"});return}return n.data}catch{t.classList.add("reviews__error"),e.classList.remove("reviews__error"),h.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}async function be(e){try{return(await E.post("/requests",e,{headers:{"Content-Type":"application/json"}})).data}catch(t){h.error({message:`${t.response.data.message}`,position:"topRight"})}}const ve=new W({elements_selector:".lazy"}),ye=document.querySelector(".js-reviews"),T={prevButton:document.querySelector(".reviews__btn--prev"),nextButton:document.querySelector(".reviews__btn--next"),prevIcon:document.querySelector(".js-review-icon-prev"),nextIcon:document.querySelector(".js-review-icon-next")},H={disabledBtnClass:"reviews__btn--disabled",disabledIconClass:"reviews__icon--disabled",disabledAttribute:"disabled"};function he(){new F(".swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".reviews__btn--next",prevEl:".reviews__btn--prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{init:function(){V(this,T,H)},slideChange:function(){V(this,T,H)}}}),N(".open-popup-link").magnificPopup({type:"inline",midClick:!0})}window.onload=async()=>{const e=await fe();ke(xe,e),he(),ve.update()};function xe(e){return e.map((t,n)=>`
        <li class="reviews__item swiper-slide">
            <a href="#review${n}" class="open-popup-link">
                <img 
                    class="lazy reviews__image"
                    data-src="${t.avatar_url}" 
                    alt="commentator's photo" 
                />
                <h4 class="reviews__title">${t.author}</h4>
                <p class="reviews__text">${t.review}</p>
            </a>
            <!-- Hidden popup content -->
            <div id="review${n}" class="mfp-hide">
                <div class="popup-container">
                    <button class="mfp-close">&times;</button> <!-- Хрестик для закриття -->
                    <img src="${t.avatar_url}" alt="${t.author}" class="popup-image" />
                    <div class="popup-content">
                        <h2>${t.author}</h2>
                        <p>${t.review}</p>
                    </div>
                </div>
            </div>
        </li>`).join("")}function ke(e,t){ye.insertAdjacentHTML("beforeend",e(t))}function V(e,t,n){const{prevButton:r,nextButton:s,prevIcon:o,nextIcon:c}=t,{disabledBtnClass:p,disabledIconClass:w,disabledAttribute:g}=n,l=(i,d,a)=>{d?i.classList.add(a):i.classList.remove(a)},f=(i,d,a)=>{d?i.setAttribute(a,"true"):i.removeAttribute(a)};l(r,e.isBeginning,p),l(o,e.isBeginning,w),f(r,e.isBeginning,g),l(s,e.isEnd,p),l(c,e.isEnd,w),f(s,e.isEnd,g)}const b=document.querySelector(".js-work-form"),u=document.querySelector(".email-validation-message"),m=b.elements.email;let k={email:"",comment:""};const Le=()=>m.value.match("^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}$")?(u.textContent="Succes!",u.style.color="#3cbc81",m.style.borderColor="#3cbc81",!0):(u.textContent="Invalid email, try again",u.style.color="#e74a3b",m.style.borderColor="#e74a3b",!1);m.addEventListener("input",()=>{u.textContent="",m.style.borderColor=""});const Ee=async e=>{e.preventDefault();const t=b.elements.email.value.trim(),n=b.elements.comment.value.trim();if(t===""||n===""){h.error({message:"Please fill in all fields",position:"bottomRight"});return}if(Le()){k.email=t,k.comment=n;try{const r=await be(k);setTimeout(()=>{u.textContent="",m.style.borderColor="",b.reset()},1e3)}catch(r){console.log(r)}}};b.addEventListener("submit",Ee);
//# sourceMappingURL=index.js.map
