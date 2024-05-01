import "./about.js";
import "./projects.js";
import "./contact.js";

window.addEventListener('DOMContentLoaded',()=> AOS.init());
window.addEventListener('changeTitle', event =>{
   event.detail === "Home" ? document.title = "Ryan Villarma" : document.title  = `${event.detail} | Ryan Villarma`;
})