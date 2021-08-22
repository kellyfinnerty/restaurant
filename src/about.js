import './css/about-style.css';

function createAbout(){
    var main = document.querySelector("main");
    main.id = "content-about";

    var title = document.createElement("h1");
    title.textContent = "about";
    title.classList.add("title");

    var restCopy = document.createElement("div");
    restCopy.textContent = `Sara is excited to welcome you to her kitchen. 
                        Located in Sara's very own dining room in pituresque Manchester-by-the-Sea, Massachusetts, 
                        guests always receive first class service in Sara's warm, multi-generational bungalow. 
                        From homemade pasta to dumplings to smoothies, you can really have it all at Sara's Kitchen.`;


    main.appendChild(title);
    main.appendChild(restCopy);
}

export default createAbout