import './css/home-style.css'
import manchester from "./images/manchester.jpeg";
import shrimp from "./images/shrimp-scampi.jpeg";
import diningRoom from "./images/dining-room.jpeg";

function createHome(){
    var main = document.querySelector("main");
    main.id = "content-home";

    var img1 = document.createElement("img");
    img1.id = "left-top";
    img1.src = manchester;
    img1.alt = "Picture of Manchester harbor";
    main.append(img1);

    var img2 = document.createElement("img");
    img2.id = "left-bottom";
    img2.src = shrimp;
    img2.alt = "Shrimp scampi dish";
    main.append(img2);

    var img3 = document.createElement("img");
    img3.id = "right-full";
    img3.src = diningRoom;
    img3.alt = "A maximalist pink dining room";
    main.append(img3);
}

export default createHome