"use strict";window.addEventListener("DOMContentLoaded",function(e){var t=document.getElementsByTagName("img"),n=Array.from(t),r=function e(t){for(var r=window.scrollY,o=window.innerHeight,i=r+o,s=0;s<n.length;s++){var a=n[s];if(!(a.offsetTop<i+300))break;var d=a.getAttribute("data-src");a.setAttribute("src",d),n.splice(s,1),s=0,0===n.length&&document.removeEventListener("scroll",e)}};document.addEventListener("scroll",r),r()});