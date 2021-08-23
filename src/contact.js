import './css/contact-style.css';
import mapImg from './images/map.jpg';
import roses from './images/flowers-background.jpeg';

function createContact(){
    var main = document.querySelector("main");
    main.id = "content-contact";

    //main.style = `background-image: url(${roses})`;

    var map = new Image();
    map.src = mapImg;
    map.alt = "Map screenshot of Manchester-by-the-Sea, Massachusetts";
    map.classList.add("map");
    main.appendChild(map);

    var address = document.createElement("div");
    address.innerHTML = `<h1 class="contact-header">Location</h1>
                        <a href="https://goo.gl/maps/CEihyx3Xit9RT8Ya8" class="link" target="_blank">55 Walker Road <br>
                        Manchester-by-the-Sea, MA</a>`;
    main.appendChild(address);

    var hours = document.createElement("div");
    hours.innerHTML = `<h1 class="contact-header">Hours</h1>
                        Monday to Friday | 7pm - 10pm <br>
                         Saturday | 6pm - 12am <br>
                         Sunday | 11am - 2pm
                         `;
    main.appendChild(hours);

    var phone = document.createElement("div");
    phone.classList.add("phone")
    phone.innerHTML = `<h1 class="contact-header">Phone Number</h1>
                        <a href="tel:978-555-9010" class="link">978-555-9010</a>`;
    main.appendChild(phone);

}

export default createContact