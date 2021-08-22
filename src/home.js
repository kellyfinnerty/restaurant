import './style.css';

function createHome(){
    var main = document.querySelector("main");

    var img1 = document.createElement("img");
    img1.id = "left-top";
    img1.src = "./public/icons/Manchester-5-1.jpeg";
    img1.alt = "Picture of Manchester harbor";
    main.append(img1);

    var img2 = document.createElement("img");
    img2.id = "left-bottom";
    img2.src = "./public/icons/shrimp-scampi-2.jpeg";
    img2.alt = "Shrimp scampi dish";
    main.append(img2);

    var img3 = document.createElement("img");
    img3.id = "right-full";
    img3.src = "./public/icons/dining-room-2.jpeg";
    img3.alt = "A maximalist pink dining room";
    main.append(img3);
}

export default createHome