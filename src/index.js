import './style.css';
import createWebsite from "./website.js"


const CONTENT = document.querySelector("#content");

const restCopy = document.createElement("div");
restCopy.textContent = `Sara is excited to welcome you to her kitchen. 
                        Located in Sara's very own dining room in pituresque Manchester-by-the-Sea, Massachusetts, 
                        guests always receive first class service in Sara's warm, multi-generational bungalow. 
                        From homemade pasta to dumplings to smoothies, you can really have it all at Sara's Kitchen.`;


createWebsite()