import{g as H,A as W,S as q,a as C,i as p,$ as U}from"./assets/vendor-BhUfECMe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();new H({elements_selector:".lazy"});const J=new W(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){let t=e.querySelector(".ac-panel");t.style.maxHeight=t.scrollHeight+"px"}});J.open(0);document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{let t=e.closest(".ac").querySelector(".ac-panel");t.style.maxHeight=t.scrollHeight+"px"})});const B="/js-winners-team/assets/power-puls-CAR0I2Hr.png",ee="/js-winners-team/assets/power-puls@2x-DfqaEtzv.png",A="/js-winners-team/assets/mimino-DW-6eCSM.png",te="/js-winners-team/assets/mimino@2x-Ct__Kg0f.png",I="/js-winners-team/assets/ukranian-CWLdLCmZ.png",se="/js-winners-team/assets/ukranian@2x-HArDxWck.png",R="/js-winners-team/assets/vegetables-DlrhDgVy.png",ne="/js-winners-team/assets/vegetables@2x-qHKRnh7C.png",O="/js-winners-team/assets/finances-0s2aRETz.png",oe="/js-winners-team/assets/finances@2x-CHWYYREp.png",V="/js-winners-team/assets/face-DW0gD83_.png",re="/js-winners-team/assets/face@2x-D4X0Y-PD.png",T="/js-winners-team/assets/body-BfEj9f96.png",ie="/js-winners-team/assets/body@2x-BZl3QsGP.png",M="/js-winners-team/assets/fruits-6id4-Z-o.png",ae="/js-winners-team/assets/fruits@2x-CWBpmrvj.png",z="/js-winners-team/assets/english-OAl_yic7.png",ce="/js-winners-team/assets/english@2x-CyukS5XP.png",F="/js-winners-team/assets/busines-B8XQfsSH.png",le="/js-winners-team/assets/busines@2x-BcBZRin9.png",de=[{src:B,srcset:`${B} 1x, ${ee} 2x`,alt:"A girl training at 'PowerPuls' gym"},{src:A,srcset:`${A} 1x, ${te} 2x`,alt:"White title on black, left side shows a hotel facade"},{src:I,srcset:`${I} 1x, ${se} 2x`,alt:"Girl in embroidered shirt on gray"},{src:R,srcset:`${R} 1x, ${ne} 2x`,alt:"Basket of vegetables on green"},{src:O,srcset:`${O} 1x, ${oe} 2x`,alt:"Couple with laptop, credit card"},{src:V,srcset:`${V} 1x, ${re} 2x`,alt:"Woman's face on brown, white title"},{src:T,srcset:`${T} 1x, ${ie} 2x`,alt:"Girl with dumbbells, black title"},{src:M,srcset:`${M} 1x, ${ae} 2x`,alt:"Title with orange, citrus fruits"},{src:z,srcset:`${z} 1x, ${ce} 2x`,alt:"Schoolgirl writing at desk"},{src:F,srcset:`${F} 1x, ${le} 2x`,alt:"White title on black background"}],ue=e=>`
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
    `,a=document.documentElement.clientWidth,me=(e,t)=>{const s=[];let r=6,n=t;a>=1024&&a<=1439?r=10:a>=1440&&(r=14);for(let o=0;o<r;o++)s.push(ue(e[n])),n=(n+1)%e.length;return`
    <ul class="covers-gallery-row">
      ${s.join("")}
    </ul>
  `},pe=(e,t)=>{const s=[];let n=0;for(let o=0;o<t;o++)s.push(me(e,n)),n=(n+3)%e.length;return s.join("")},Z=()=>{let e=4;a>=1024&&a<=1439?e=5:a>=1440&&(e=7);const t=pe(de,e),s=document.querySelector(".covers-gallery-js");s&&(s.innerHTML=t)};window.addEventListener("load",Z);window.addEventListener("resize",Z);const K=()=>{document.querySelectorAll(".covers-gallery-item").forEach(t=>{t.style.animationPlayState="running"})},N=()=>{document.querySelectorAll(".covers-gallery-item").forEach(t=>{t.style.animationPlayState="paused"})},Y=()=>{const e=document.querySelector(".covers-js");if(e){const t=e.getBoundingClientRect();t.top<window.innerHeight&&t.bottom>0?K():N()}},we={root:null,threshold:.1},ge=e=>{e.forEach(t=>{t.isIntersecting?K():N()})},fe=new IntersectionObserver(ge,we);window.addEventListener("load",()=>{const e=document.querySelector(".covers-js");e&&(fe.observe(e),Y())});window.addEventListener("resize",()=>{Y()});document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new W(e,{duration:400,showFirstItem:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-box-answer",headerClass:"faq-item-title",beforeOpen:t=>{const s=t.querySelector(".faq-box-answer");s.style.display="block"},beforeClose:t=>{const s=t.querySelector(".faq-box-answer");s.style.display="none"}})});const ve=document.querySelectorAll(".faq-item");ve.forEach(e=>{e.addEventListener("click",function(){this.querySelector(".faq-arrow").classList.toggle("rotate")})});const ye=document.querySelector(".desktop-menu-btn"),S=document.querySelector(".navigation-menu");ye.addEventListener("click",()=>{S.classList.toggle("is-open")});S.addEventListener("click",e=>{e.target.nodeName==="A"&&S.classList.remove("is-open")});const b=document.querySelector(".mobile-menu"),be=document.querySelector(".burger-btn"),he=document.querySelector(".close-btn");be.addEventListener("click",()=>{b.classList.add("is-open"),document.body.classList.add("no-scroll")});he.addEventListener("click",()=>{b.classList.remove("is-open"),document.body.classList.remove("no-scroll")});b.addEventListener("click",e=>{e.target.nodeName==="A"&&(b.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});const G=document.querySelector(".header");window.onscroll=()=>{scrollY>32?G.classList.add("is-scrolled"):G.classList.remove("is-scrolled")};const w=document.querySelector(".js-modal"),xe=document.querySelector(".js-close-modal");document.querySelector(".js-open-modal");function ke(){w.classList.add("is-open"),document.addEventListener("keydown",X),w.addEventListener("click",Q)}function _(){w.classList.remove("is-open"),document.removeEventListener("keydown",X),w.removeEventListener("click",Q)}function X(e){e.key==="Escape"&&_()}function Q(e){e.target===w&&_()}xe.addEventListener("click",_);new q(".projects-swiper",{speed:600,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".right-button",prevEl:".left-button"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:1,spaceBetween:16},1440:{slidesPerView:1,spaceBetween:16}}});C.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Ee(){const e=document.querySelector(".js-text-error"),t=document.querySelector(".js-reviews-btn");try{const s=await C.get("/reviews");if(s.data.length===0){t.classList.add("reviews__error"),e.classList.remove("reviews__error"),p.error({message:"Oops...Something went wrong!",position:"bottomRight"});return}return s.data}catch{t.classList.add("reviews__error"),e.classList.remove("reviews__error"),p.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}async function Le(e){try{return(await C.post("/requests",e,{headers:{"Content-Type":"application/json"}})).data}catch{p.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}function f(e,t,s){const{prevButton:r,nextButton:n,prevIcon:o,nextIcon:d}=t,{disabledBtnClass:j,disabledIconClass:D,disabledAttribute:$}=s,x=e.isBeginning,k=e.isEnd,g=(u,E,m)=>{E?u.classList.add(m):u.classList.remove(m)},P=(u,E,m)=>{E?u.setAttribute(m,"true"):u.removeAttribute(m)};g(r,x,j),g(o,x,D),P(r,x,$),g(n,k,j),g(d,k,D),P(n,k,$)}const Se=new H({elements_selector:".lazy__load"}),qe=document.querySelector(".js-reviews"),v={prevButton:document.querySelector(".reviews__btn--prev"),nextButton:document.querySelector(".reviews__btn--next"),prevIcon:document.querySelector(".js-review-icon-prev"),nextIcon:document.querySelector(".js-review-icon-next")},y={disabledBtnClass:"reviews__btn--disabled",disabledIconClass:"reviews__icon--disabled",disabledAttribute:"disabled"};function Ce(){new q(".reviews-swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".reviews__btn--next",prevEl:".reviews__btn--prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{init:function(){f(this,v,y)},slideChange:function(){f(this,v,y)},reachBeginning:function(){f(this,v,y)},reachEnd:function(){f(this,v,y)}}}),U(".open-popup-link").magnificPopup({type:"inline",midClick:!0})}window.onload=async()=>{const e=await Ee();je(_e,e),Ce(),Se.update()};function _e(e){return e.map((t,s)=>`
        <li class="reviews__item swiper-slide">
            <a href="#review${s}" class="open-popup-link">
                <img 
                    class="lazy__load reviews__image"
                    data-src="${t.avatar_url}" 
                    alt="commentator's photo" 
                />
                <h4 class="reviews__title">${t.author}</h4>
                <p class="reviews__text">${t.review}</p>
            </a>
            <div id="review${s}" class="mfp-hide">
                <div class="popup-container">
                    <button class="mfp-close">&times;</button>
                    <img data-src="${t.avatar_url}" alt="${t.author}" class="popup-image lazy__load" />
                    <div class="popup-content">
                        <h2>${t.author}</h2>
                        <p>${t.review}</p>
                    </div>
                </div>
            </div>
        </li>`).join("")}function je(e,t){qe.insertAdjacentHTML("beforeend",e(t))}const c=document.querySelector(".js-work-form"),l=document.querySelector(".email-validation-message"),i=c.elements.email,h=c.elements.comment;let L={email:"",comment:""};const De=()=>{const e=i.value.trim(),t=h.value.trim();let s=!1;return e===""&&(i.style.borderColor="#ed3b44",s=!0),t===""&&(h.style.borderColor="#ed3b44",s=!0),s&&p.error({message:"Please fill in all fields",position:"bottomRight"}),s},$e=()=>i.value.match("^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}$")?!0:(l.textContent="Invalid email, try again",l.style.color="#e74a3b",i.style.borderColor="#e74a3b",!1);i.addEventListener("input",()=>{l.textContent="",i.style.borderColor=""});const Pe=async e=>{e.preventDefault();const t=c.elements.email.value.trim(),s=c.elements.comment.value.trim();if(!De()&&(i.addEventListener("input",()=>{i.style.borderColor=""}),h.addEventListener("input",()=>{h.style.borderColor=""}),!!$e())){L.email=t,L.comment=s;try{await Le(L)&&(l.textContent="Success!",l.style.color="#3cbc81",i.style.borderColor="#3cbc81",setTimeout(()=>{l.textContent="",i.style.borderColor="",c.reset(),ke()},1e3))}catch(r){p.error({message:"Oops... Something went wrong!",position:"bottomRight"}),console.log(r)}}};c.addEventListener("submit",Pe);new q(".about-swiper",{speed:500,slidesPerView:6,direction:"horizontal",loop:!0,loopedSlides:18,navigation:{nextEl:".custom-next"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},touchMoveStopPropagation:!1,mousewheel:!0,grabCursor:!0});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".custom-next").classList.remove("swiper-button-lock")});
//# sourceMappingURL=index.js.map
