import createHome from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";
import createContact from "./contact.js";
import './css/style.css';

import Logo from "./images/saras-kitchen-logo.png";

const body = document.querySelector("body");


function createHeader(){
    var header = document.createElement("header");
    header.id = "header";
    body.appendChild(header);

    var logo = document.createElement("img");
    logo.id = "header-logo";
    logo.src = Logo;
    logo.alt = "Sara's Kitchen Logo with Chef's Hat";
    header.appendChild(logo);


    header.appendChild(createNav());

}


function createNav(){
    var nav = document.createElement("nav");
    nav.id = "nav";

    var homeTab = document.createElement("button");
    homeTab.classList.add("nav-button");
    homeTab.innerHTML = "Home";
    homeTab.addEventListener("click", (e) => {
        clearContent();
        createHome();
    });

    var menuTab = document.createElement("button");
    menuTab.classList.add("nav-button");
    menuTab.innerHTML = "Menu";
    menuTab.addEventListener("click", (e) => {
        if(checkActive(e.target)) return

        resetActive(e.target);
        clearContent();
        createMenu();
    });

    var aboutTab = document.createElement("button");
    aboutTab.classList.add("nav-button");
    aboutTab.innerHTML = "About";
    aboutTab.addEventListener("click", (e) => {
        clearContent();
        createAbout();
    });

    var contactTab = document.createElement("button");
    contactTab.classList.add("nav-button");
    contactTab.innerHTML = "Contact";
    contactTab.addEventListener("click", (e) => {
        clearContent();
        createContact();
    });

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(aboutTab);
    nav.appendChild(contactTab);

    return nav;
}

function checkActive(tabButton){
    return tabButton.classList.contains('active')
}

function createMain(){
    var main = document.createElement("main");
    main.id = "content";
    body.appendChild(main);
}


function clearContent(){
    var main = document.querySelector("main");
    var length = main.children.length;

    for(let i = 0; i < length; i++){
        main.children[0].remove();
    }
    
}


function createFooter(){
    var footer = document.createElement("footer");
    footer.id = "footer";
    body.appendChild(footer);

    var developDiv = document.createElement("div");
    developDiv.innerText = "developed by kelly finnerty in 2021."
    footer.appendChild(developDiv);
}


function createWebsite(){
    createHeader();
    createMain();
    createHome();
    createFooter();
}


export default createWebsite