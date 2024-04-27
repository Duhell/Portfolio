import "./contact.js";
import "./projects.js";

window.addEventListener('changeTitle', event =>{
   event.detail === "Home" ? document.title = "Ryan Villarma" : document.title  = `${event.detail} | Ryan Villarma`;
})