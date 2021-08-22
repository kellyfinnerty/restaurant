import './style.css';

function createAbout(){
    var main = document.querySelector("main");

    var title = document.createElement("h1");
    title.textContent = "About Us";
    main.appendChild(title);

    console.log("about working");
}

export default createAbout