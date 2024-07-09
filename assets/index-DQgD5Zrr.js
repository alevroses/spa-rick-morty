(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const u=()=>`
    <div class="Header-main">
      <div class="Header-logo">
        <h1><a href="/">Scientist.co</a></h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">About</a>
      </div>
    </div>
  `,c="https://rickandmortyapi.com/api/character/",l=async r=>{const e=r?`${c}${r}`:c;try{const n=await(await fetch(e)).json();return console.log(n),n}catch(s){console.log("Fetch Error",s)}},p=async()=>`
    <div class="Characters">
      ${(await l()).results.map(s=>`
          <article class="Character-item">
            <a href="#/${s.id}/">
              <img src="${s.image}" alt="${s.name}" />
              <h2>${s.name}</h2>
            </a>
          </article>
          `).join("")}   
    </div>
  `,d=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",m=async()=>{const r=d(),e=await l(r);return`
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${e.image}" alt="${e.name}" />
        <h2>${e.name}</h2>
      </article>
      <article class="Character-card">
        <h3>Episodes: <span>${e.episode.length}</span></h3>
        <h3>Status: <span>${e.status}</span></h3>
        <h3>Species: <span>${e.species}</span></h3>
        <h3>Gender: <span>${e.gender}</span></h3>
        <h3>Origin: <span>${e.origin.name}</span></h3>
        <h3>Last Location: ${e.location.name}</h3>
      </article>
    </div>  
  `},f=()=>`
    <div class="Error404">
      <h2>Error 404</h2>
    </div>
  `,v=r=>r.length<=3?r==="/"?r:"/:id":`/${r}`,i={"/":p,"/:id":m,"/contact":"Contact"},h=async()=>{const r=document.getElementById("header"),e=document.getElementById("content");r.innerHTML=u();let s=d(),n=await v(s),t=i[n]?i[n]:f;e.innerHTML=await t()};window.addEventListener("load",h);window.addEventListener("hashchange",h);
