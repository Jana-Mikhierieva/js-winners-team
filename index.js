import{g as z,A as Z,S as V,a as B,i as x}from"./assets/vendor-qNJyAlfQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();new z({elements_selector:".lazy"});const j="/js-winners-team/assets/power-puls-CAR0I2Hr.png",K="/js-winners-team/assets/power-puls@2x-DfqaEtzv.png",q="/js-winners-team/assets/mimino-DW-6eCSM.png",N="/js-winners-team/assets/mimino@2x-Ct__Kg0f.png",C="/js-winners-team/assets/ukranian-CWLdLCmZ.png",X="/js-winners-team/assets/ukranian@2x-HArDxWck.png",S="/js-winners-team/assets/vegetables-DlrhDgVy.png",Y="/js-winners-team/assets/vegetables@2x-qHKRnh7C.png",_="/js-winners-team/assets/finances-0s2aRETz.png",Q="/js-winners-team/assets/finances@2x-CHWYYREp.png",D="/js-winners-team/assets/face-DW0gD83_.png",U="/js-winners-team/assets/face@2x-D4X0Y-PD.png",$="/js-winners-team/assets/body-BfEj9f96.png",J="/js-winners-team/assets/body@2x-BZl3QsGP.png",I="/js-winners-team/assets/fruits-6id4-Z-o.png",ee="/js-winners-team/assets/fruits@2x-CWBpmrvj.png",A="/js-winners-team/assets/english-OAl_yic7.png",te="/js-winners-team/assets/english@2x-CyukS5XP.png",P="/js-winners-team/assets/busines-B8XQfsSH.png",se="/js-winners-team/assets/busines@2x-BcBZRin9.png",ne=[{src:j,srcset:`${j} 1x, ${K} 2x`,alt:"A girl training at 'PowerPuls' gym"},{src:q,srcset:`${q} 1x, ${N} 2x`,alt:"White title on black, left side shows a hotel facade"},{src:C,srcset:`${C} 1x, ${X} 2x`,alt:"Girl in embroidered shirt on gray"},{src:S,srcset:`${S} 1x, ${Y} 2x`,alt:"Basket of vegetables on green"},{src:_,srcset:`${_} 1x, ${Q} 2x`,alt:"Couple with laptop, credit card"},{src:D,srcset:`${D} 1x, ${U} 2x`,alt:"Woman's face on brown, white title"},{src:$,srcset:`${$} 1x, ${J} 2x`,alt:"Girl with dumbbells, black title"},{src:I,srcset:`${I} 1x, ${ee} 2x`,alt:"Title with orange, citrus fruits"},{src:A,srcset:`${A} 1x, ${te} 2x`,alt:"Schoolgirl writing at desk"},{src:P,srcset:`${P} 1x, ${se} 2x`,alt:"White title on black background"}],oe=e=>`
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
    `,re=(e,t)=>{const n=[];for(let o=0;o<t;o++)n.push(oe(e[o%e.length]));return n.join("")},F=()=>{const e=window.innerWidth;let t=40;e>=1024&&(t=50);const n=re(ne,t),o=document.querySelector(".covers-gallery-js");o&&(o.innerHTML=n)};window.addEventListener("load",F);window.addEventListener("resize",F);document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new Z(e,{duration:400,showFirstItem:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-box-answer",headerClass:"faq-item-title",beforeOpen:t=>{const n=t.querySelector(".faq-box-answer");n.style.display="block"},beforeClose:t=>{const n=t.querySelector(".faq-box-answer");n.style.display="none"}})});const ie=document.querySelectorAll(".faq-item");ie.forEach(e=>{e.addEventListener("click",function(){this.querySelector(".faq-arrow").classList.toggle("rotate")})});const ae=document.querySelector(".desktop-menu-btn"),L=document.querySelector(".navigation-menu");ae.addEventListener("click",()=>{L.classList.toggle("is-open")});L.addEventListener("click",e=>{e.target.nodeName==="A"&&L.classList.remove("is-open")});const h=document.querySelector(".mobile-menu"),ce=document.querySelector(".burger-btn"),le=document.querySelector(".close-btn");ce.addEventListener("click",()=>{h.classList.add("is-open")});le.addEventListener("click",()=>{h.classList.remove("is-open")});h.addEventListener("click",e=>{e.target.nodeName==="A"&&h.classList.remove("is-open")});const v=document.querySelector(".js-modal"),de=document.querySelector(".js-close-modal"),ue=document.querySelector(".js-open-modal");function me(){v.classList.add("is-open"),document.addEventListener("keydown",G),v.addEventListener("click",H)}function E(){v.classList.remove("is-open"),document.removeEventListener("keydown",G),v.removeEventListener("click",H)}function G(e){e.key==="Escape"&&E()}function H(e){e.target===v&&E()}ue.addEventListener("click",me);de.addEventListener("click",E);const y={prevButton:document.querySelector(".left-button"),nextButton:document.querySelector(".right-button"),prevIcon:document.querySelector(".left-icon"),nextIcon:document.querySelector(".right-icon")},O={disabledBtnClass:"button-disabled-projects",disabledIconClass:"icon-disabled",disabledAttribute:"disabled"};new V(".swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".right-button",prevEl:".left-button"},on:{init:function(){M(this,y,O)},slideChange:function(){M(this,y,O)}},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1,spaceBetween:16},1440:{slidesPerView:1,spaceBetween:16}}});function M(e,t,n){const{prevButton:o,nextButton:s,prevIcon:r,nextIcon:l}=t,{disabledBtnClass:p,disabledIconClass:w,disabledAttribute:g}=n,c=(i,d,a)=>{d?i.classList.add(a):i.classList.remove(a)},b=(i,d,a)=>{d?i.setAttribute(a,"true"):i.removeAttribute(a)};c(o,e.isBeginning,p),c(r,e.isBeginning,w),b(o,e.isBeginning,g),c(s,e.isEnd,p),c(l,e.isEnd,w),b(s,e.isEnd,g)}y.nextButton.disabled=!1;y.nextButton.classList.remove("button-disabled-projects");y.nextIcon.classList.remove("icon-disabled");B.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function pe(){const e=document.querySelector(".js-text-error"),t=document.querySelector(".js-reviews-btn");try{const n=await B.get("/reviews");if(n.data.length===0){t.classList.add("reviews__error"),e.classList.remove("reviews__error"),x.error({message:"Oops...Something went wrong!",position:"bottomRight"});return}return n.data}catch{t.classList.add("reviews__error"),e.classList.remove("reviews__error"),x.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}async function we(e){try{return(await B.post("/requests",e,{headers:{"Content-Type":"application/json"}})).data}catch(t){x.error({message:`${t.response.data.message}`,position:"topRight"})}}const ge=new z({elements_selector:".lazy"}),be=document.querySelector(".js-reviews"),R={prevButton:document.querySelector(".reviews__btn--prev"),nextButton:document.querySelector(".reviews__btn--next"),prevIcon:document.querySelector(".js-review-icon-prev"),nextIcon:document.querySelector(".js-review-icon-next")},T={disabledBtnClass:"reviews__btn--disabled",disabledIconClass:"reviews__icon--disabled",disabledAttribute:"disabled"};function fe(){new V(".swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".reviews__btn--next",prevEl:".reviews__btn--prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{init:function(){W(this,R,T)},slideChange:function(){W(this,R,T)}}})}window.onload=async()=>{const e=await pe();ye(ve,e),fe(),ge.update()};function ve(e){return e.map(t=>`
        <li class="reviews__item swiper-slide">
            <img 
                class="lazy reviews__image"
                data-src="${t.avatar_url}" 
                alt="commentator's photo" 
            />
            <h4 class="reviews__title">${t.author}</h4>
            <p class="reviews__text">${t.review}</p>
        </li>`).join("")}function ye(e,t){be.insertAdjacentHTML("beforeend",e(t))}function W(e,t,n){const{prevButton:o,nextButton:s,prevIcon:r,nextIcon:l}=t,{disabledBtnClass:p,disabledIconClass:w,disabledAttribute:g}=n,c=(i,d,a)=>{d?i.classList.add(a):i.classList.remove(a)},b=(i,d,a)=>{d?i.setAttribute(a,"true"):i.removeAttribute(a)};c(o,e.isBeginning,p),c(r,e.isBeginning,w),b(o,e.isBeginning,g),c(s,e.isEnd,p),c(l,e.isEnd,w),b(s,e.isEnd,g)}const f=document.querySelector(".js-work-form"),u=document.querySelector(".email-validation-message"),m=f.elements.email;let k={email:"",comment:""};const xe=()=>m.value.match("^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}$")?(u.textContent="Succes!",u.style.color="#3cbc81",m.style.borderColor="#3cbc81",!0):(u.textContent="Invalid email, try again",u.style.color="#e74a3b",m.style.borderColor="#e74a3b",!1);m.addEventListener("input",()=>{u.textContent="",m.style.borderColor=""});const he=async e=>{e.preventDefault();const t=f.elements.email.value.trim(),n=f.elements.comment.value.trim();if(t===""||n===""){x.error({message:"Please fill in all fields",position:"bottomRight"});return}if(xe()){k.email=t,k.comment=n;try{const o=await we(k);setTimeout(()=>{u.textContent="",m.style.borderColor="",f.reset()},1e3)}catch(o){console.log(o)}}};f.addEventListener("submit",he);
//# sourceMappingURL=index.js.map