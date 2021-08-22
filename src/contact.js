import './css/contact-style.css';
import mapImg from './images/map.jpg';

function createContact(){
    var main = document.querySelector("main");
    main.id = "content-contact";

    var map = new Image();
    map.src = mapImg;
    map.alt = "Map screenshot of Manchester-by-the-Sea, Massachusetts";
    map.classList.add("map");
    main.appendChild(map);

    var hours = document.createElement("div");
    hours.innerHTML = `<h1 class="contact-header">Hours</h1>
                        Monday to Friday | 7pm - 10pm <br>
                         Saturday | 6pm - 12am <br>
                         Sunday | 11am - 2pm
                         `;
    main.appendChild(hours);

    var address = document.createElement("div");
    address.innerHTML = `<h1 class="contact-header">Location</h1>
                        55 Walker Road <br>
                        Manchester-by-the-Sea, MA`;
    main.appendChild(address);

    var phone = document.createElement("div");
    phone.classList.add("phone")
    phone.innerHTML = `<h1 class="contact-header">Phone Number</h1>
                        978-555-9010`;
    main.appendChild(phone);

}

export default createContact