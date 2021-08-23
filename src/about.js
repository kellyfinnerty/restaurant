import './css/about-style.css';

function createAbout(){
    var main = document.querySelector("main");
    main.id = "content-about";

    var title = document.createElement("h1");
    title.textContent = "Welcome!";
    title.classList.add("title");

    var restCopy = document.createElement("div");
    restCopy.classList.add("copy");
    restCopy.innerHTML = `I am excited to welcome you to my kitchen. 
                        Located in my very own dining room in pituresque Manchester-by-the-Sea, Massachusetts, 
                        guests always receive first class service in my warm, multi-generational bungalow. 
                        From homemade pasta to dumplings to smoothies, you can really have it all at Sara's Kitchen.
                        <div id="sign-off">Love,&nbsp Sara &nbsp   &nbsp&nbsp</div>
                        `;
    


    main.appendChild(title);
    main.appendChild(restCopy);
}

export default createAbout