"use strict";window.addEventListener("DOMContentLoaded",function(t){var e=document.getElementsByTagName("img"),r=Array.from(e),n=function t(e){for(var n=window.scrollY,o=window.innerHeight,s=n+o,a=0;a<r.length;a++){var i=r[a];if(!(i.offsetTop<s+300))break;var d=i.getAttribute("data-src");i.setAttribute("src",d);var c=i.getAttribute("class");c?c+=" load":c="load",i.setAttribute("class",c),r.splice(a,1),a=0,0===r.length&&document.removeEventListener("scroll",t)}};document.addEventListener("scroll",n),n()});