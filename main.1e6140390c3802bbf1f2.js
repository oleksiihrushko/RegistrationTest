(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,s){},QfWi:function(e,t,s){"use strict";s.r(t);s("RtS0"),s("D/wG"),s("3dw1"),s("L1EO");var n=function(e){e.classList.remove("invalid"),e.classList.add("valid")},a=function(e){e.classList.remove("valid"),e.classList.add("invalid")},i=document.querySelector(".loginDescr"),r=document.querySelector(".passDescr"),c=document.querySelector(".secondPassDescr"),o=document.querySelector(".okBtn"),l=document.querySelector(".regBtn"),d=document.querySelector(".modal"),u=document.querySelector(".modal__form"),v=u.elements.logIn,p=u.elements.password,m=u.elements.passwordRepeat,w=u.elements.okBtn,L=document.querySelectorAll(".password-control");w.disabled=!0;var f=function(e){switch(e.target.name){case"logIn":(l=e.target.value).length>4&&l.length<11?n(i):a(i);break;case"password":!function(e){e.length>7&&e.length<17?n(r):a(r)}(e.target.value);break;case"passwordRepeat":t=e.target.value,s=p.value,t===s?n(c):a(c)}var t,s,l;i.classList.contains("valid")&&r.classList.contains("valid")&&c.classList.contains("valid")?o.disabled=!1:o.disabled=!0};function g(e){var t=e.target,s=t.classList.contains("togglePasswordRepeat")?m:p;"password"==s.getAttribute("type")?(t.classList.add("view"),s.setAttribute("type","text")):(t.classList.remove("view"),s.setAttribute("type","password"))}l.addEventListener("click",(function(e){e.preventDefault(),d.classList.add("is-open")})),v.addEventListener("input",f),p.addEventListener("input",f),m.addEventListener("input",f),L.forEach((function(e){return e.addEventListener("click",g)})),w.addEventListener("click",(function(e){e.preventDefault(),alert("ТАДААААМ!")}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1e6140390c3802bbf1f2.js.map