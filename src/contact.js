import './css/contact-style.css';

function createContact(){
    var main = document.querySelector("main");
    main.id = "content-contact";

    var hours = document.createElement("div");
    hours.innerText = `Monday to Friday 7pm - 10pm \n
                         Saturday 6pm - 12am \n
                         Sunday 11am - 2pm \n\n
                         978-555-9010`;
    main.appendChild(hours);

    var address = document.createElement("div");
    address.innerText = `55 Walker Road \n
                        Manchester-by-the-Sea, MA`;
    main.appendChild(address);

}

export default createContact