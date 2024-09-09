import{g as z,A as G,S as E,a as L,i as m,$ as X}from"./assets/vendor-BmMjPC-G.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();new z({elements_selector:".lazy"});const Y=new G(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){let t=e.querySelector(".ac-panel");t.style.maxHeight=t.scrollHeight+"px"}});Y.open(0);document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{let t=e.closest(".ac").querySelector(".ac-panel");t.style.maxHeight=t.scrollHeight+"px"})});const D="/js-winners-team/assets/power-puls-CAR0I2Hr.png",Q="/js-winners-team/assets/power-puls@2x-DfqaEtzv.png",B="/js-winners-team/assets/mimino-DW-6eCSM.png",U="/js-winners-team/assets/mimino@2x-Ct__Kg0f.png",P="/js-winners-team/assets/ukranian-CWLdLCmZ.png",J="/js-winners-team/assets/ukranian@2x-HArDxWck.png",A="/js-winners-team/assets/vegetables-DlrhDgVy.png",ee="/js-winners-team/assets/vegetables@2x-qHKRnh7C.png",I="/js-winners-team/assets/finances-0s2aRETz.png",te="/js-winners-team/assets/finances@2x-CHWYYREp.png",R="/js-winners-team/assets/face-DW0gD83_.png",se="/js-winners-team/assets/face@2x-D4X0Y-PD.png",O="/js-winners-team/assets/body-BfEj9f96.png",ne="/js-winners-team/assets/body@2x-BZl3QsGP.png",M="/js-winners-team/assets/fruits-6id4-Z-o.png",oe="/js-winners-team/assets/fruits@2x-CWBpmrvj.png",T="/js-winners-team/assets/english-OAl_yic7.png",re="/js-winners-team/assets/english@2x-CyukS5XP.png",V="/js-winners-team/assets/busines-B8XQfsSH.png",ie="/js-winners-team/assets/busines@2x-BcBZRin9.png",ae=[{src:D,srcset:`${D} 1x, ${Q} 2x`,alt:"A girl training at 'PowerPuls' gym"},{src:B,srcset:`${B} 1x, ${U} 2x`,alt:"White title on black, left side shows a hotel facade"},{src:P,srcset:`${P} 1x, ${J} 2x`,alt:"Girl in embroidered shirt on gray"},{src:A,srcset:`${A} 1x, ${ee} 2x`,alt:"Basket of vegetables on green"},{src:I,srcset:`${I} 1x, ${te} 2x`,alt:"Couple with laptop, credit card"},{src:R,srcset:`${R} 1x, ${se} 2x`,alt:"Woman's face on brown, white title"},{src:O,srcset:`${O} 1x, ${ne} 2x`,alt:"Girl with dumbbells, black title"},{src:M,srcset:`${M} 1x, ${oe} 2x`,alt:"Title with orange, citrus fruits"},{src:T,srcset:`${T} 1x, ${re} 2x`,alt:"Schoolgirl writing at desk"},{src:V,srcset:`${V} 1x, ${ie} 2x`,alt:"White title on black background"}],ce=e=>`
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
              <img src="${e.src}" alt="${e.alt}" loading="lazy"/>
            </picture>
          </li>
    `,le=(e,t)=>{const n=[];let s=t;for(let o=0;o<10;o++)n.push(ce(e[s])),s=(s+1)%e.length;return`
    <ul class="covers-gallery-row">
      ${n.join("")}
    </ul>
  `},de=(e,t)=>{const n=[];let s=0;for(let o=0;o<t;o++)n.push(le(e,s)),s=(s+3)%e.length;return n.join("")},H=()=>{const e=document.documentElement.clientWidth;let t=4;e>=1024&&(t=5);const n=de(ae,t),r=document.querySelector(".covers-gallery-js");r&&(r.innerHTML=n)};window.addEventListener("load",H);window.addEventListener("resize",H);const ue=()=>{document.querySelectorAll(".covers-gallery-item").forEach(t=>{t.style.animationPlayState="running"})},me=()=>{document.querySelectorAll(".covers-gallery-item").forEach(t=>{t.style.animationPlayState="paused"})},pe={root:null,threshold:.1},we=e=>{e.forEach(t=>{t.isIntersecting?ue():me()})},W=new IntersectionObserver(we,pe);console.log(W);const F=document.querySelector(".covers-js");W.observe(F);console.log(F);document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new G(e,{duration:400,showFirstItem:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-box-answer",headerClass:"faq-item-title",beforeOpen:t=>{const n=t.querySelector(".faq-box-answer");n.style.display="block"},beforeClose:t=>{const n=t.querySelector(".faq-box-answer");n.style.display="none"}})});const ge=document.querySelectorAll(".faq-item");ge.forEach(e=>{e.addEventListener("click",function(){this.querySelector(".faq-arrow").classList.toggle("rotate")})});const fe=document.querySelector(".desktop-menu-btn"),S=document.querySelector(".navigation-menu");fe.addEventListener("click",()=>{S.classList.toggle("is-open")});S.addEventListener("click",e=>{e.target.nodeName==="A"&&S.classList.remove("is-open")});const y=document.querySelector(".mobile-menu"),ve=document.querySelector(".burger-btn"),ye=document.querySelector(".close-btn");ve.addEventListener("click",()=>{y.classList.add("is-open")});ye.addEventListener("click",()=>{y.classList.remove("is-open")});y.addEventListener("click",e=>{e.target.nodeName==="A"&&y.classList.remove("is-open")});const p=document.querySelector(".js-modal"),be=document.querySelector(".js-close-modal");document.querySelector(".js-open-modal");function he(){p.classList.add("is-open"),document.addEventListener("keydown",Z),p.addEventListener("click",K)}function q(){p.classList.remove("is-open"),document.removeEventListener("keydown",Z),p.removeEventListener("click",K)}function Z(e){e.key==="Escape"&&q()}function K(e){e.target===p&&q()}be.addEventListener("click",q);const N=document.querySelector(".right-button");new E(".swiper",{slidesPerView:1,spaceBetween:16,speed:600,breakpointsBase:"container",centeredSlides:!0,maxBackfaceHiddenSlides:3,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".right-button",prevEl:".left-button"}});N.disabled=!1;N.classList.remove("swiper-button-disabled");L.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function xe(){const e=document.querySelector(".js-text-error"),t=document.querySelector(".js-reviews-btn");try{const n=await L.get("/reviews");if(n.data.length===0){t.classList.add("reviews__error"),e.classList.remove("reviews__error"),m.error({message:"Oops...Something went wrong!",position:"bottomRight"});return}return n.data}catch{t.classList.add("reviews__error"),e.classList.remove("reviews__error"),m.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}async function ke(e){try{return(await L.post("/requests",e,{headers:{"Content-Type":"application/json"}})).data}catch{m.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}function g(e,t,n){const{prevButton:r,nextButton:s,prevIcon:o,nextIcon:c}=t,{disabledBtnClass:_,disabledIconClass:j,disabledAttribute:C}=n,b=e.isBeginning,h=e.isEnd,w=(l,x,d)=>{x?l.classList.add(d):l.classList.remove(d)},$=(l,x,d)=>{x?l.setAttribute(d,"true"):l.removeAttribute(d)};w(r,b,_),w(o,b,j),$(r,b,C),w(s,h,_),w(c,h,j),$(s,h,C)}const Se=new z({elements_selector:".lazy__load"}),Ee=document.querySelector(".js-reviews"),f={prevButton:document.querySelector(".reviews__btn--prev"),nextButton:document.querySelector(".reviews__btn--next"),prevIcon:document.querySelector(".js-review-icon-prev"),nextIcon:document.querySelector(".js-review-icon-next")},v={disabledBtnClass:"reviews__btn--disabled",disabledIconClass:"reviews__icon--disabled",disabledAttribute:"disabled"};function Le(){new E(".reviews-swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".reviews__btn--next",prevEl:".reviews__btn--prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{init:function(){g(this,f,v)},slideChange:function(){g(this,f,v)},reachBeginning:function(){g(this,f,v)},reachEnd:function(){g(this,f,v)}}}),X(".open-popup-link").magnificPopup({type:"inline",midClick:!0})}window.onload=async()=>{const e=await xe();_e(qe,e),Le(),Se.update()};function qe(e){return e.map((t,n)=>`
        <li class="reviews__item swiper-slide">
            <a href="#review${n}" class="open-popup-link">
                <img 
                    class="lazy__load reviews__image"
                    data-src="${t.avatar_url}" 
                    alt="commentator's photo" 
                />
                <h4 class="reviews__title">${t.author}</h4>
                <p class="reviews__text">${t.review}</p>
            </a>
            <div id="review${n}" class="mfp-hide">
                <div class="popup-container">
                    <button class="mfp-close">&times;</button>
                    <img data-src="${t.avatar_url}" alt="${t.author}" class="popup-image lazy__load" />
                    <div class="popup-content">
                        <h2>${t.author}</h2>
                        <p>${t.review}</p>
                    </div>
                </div>
            </div>
        </li>`).join("")}function _e(e,t){Ee.insertAdjacentHTML("beforeend",e(t))}const u=document.querySelector(".js-work-form"),i=document.querySelector(".email-validation-message"),a=u.elements.email;let k={email:"",comment:""};const je=()=>a.value.match("^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}$")?!0:(i.textContent="Invalid email, try again",i.style.color="#e74a3b",a.style.borderColor="#e74a3b",!1);a.addEventListener("input",()=>{i.textContent="",a.style.borderColor=""});const Ce=async e=>{e.preventDefault();const t=u.elements.email.value.trim(),n=u.elements.comment.value.trim();if(t===""||n===""){m.error({message:"Please fill in all fields",position:"bottomRight"});return}if(je()){k.email=t,k.comment=n;try{await ke(k)&&(i.textContent="Success!",i.style.color="#3cbc81",a.style.borderColor="#3cbc81",setTimeout(()=>{i.textContent="",a.style.borderColor="",u.reset(),he()},1e3))}catch(r){m.error({message:"Oops... Something went wrong!",position:"bottomRight"}),console.log(r)}}};u.addEventListener("submit",Ce);new E(".swiper",{speed:400,slidesPerView:6,direction:"horizontal",loop:!0,loopedSlides:6,navigation:{nextEl:".custom-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},touchMoveStopPropagation:!1,mousewheel:!0,grabCursor:!0});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".custom-next").classList.remove("swiper-button-lock")});
//# sourceMappingURL=index.js.map
