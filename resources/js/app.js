import "./about.js";
import "./projects.js";
import "./contact.js";

let currentTitle = "Ryan Villarma";
window.addEventListener('DOMContentLoaded',()=> AOS.init());
window.addEventListener('changeTitle', event =>{
   event.detail === "Home" ? document.title = "Ryan Villarma" : document.title  = `${event.detail} | Ryan Villarma`;
   currentTitle = document.title;
})
window.addEventListener('blur',()=>document.title = "Am I good enough?");
window.addEventListener('focus',()=>document.title = currentTitle );