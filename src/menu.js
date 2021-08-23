import './css/menu-style.css';
import Break from './images/break.png';

function createMenu(){
    var main = document.querySelector("main");
    main.id = "content-menu";

    var title = document.createElement("h1");
    title.textContent = "Our Menu";
    title.classList.add('menu-title');
    main.appendChild(title);

    //addDivider()

    var specials = document.createElement("div");
    specials.innerHTML = `<h2 class="menu-category">Specials</h2>
                        Most of the menu is made of daily specials.<br> Please give us a call day of to hear what Sara's cooking up!`;
    specials.id = "specials";
    main.appendChild(specials);

    addDivider()

    var apps = document.createElement("div");
    apps.innerHTML = `<h2 class="menu-category">Appetizers</h2>
                     <div class="menu-item">
                        <h3 class="item-title">Kale Chips</h3>
                        Fresh kale from the Carlson garden cooked perfectly to a salty crisp
                    </div>`;
    main.appendChild(apps);

    addDivider();

    var dinner = document.createElement("div");
    dinner.innerHTML = `<h2 class="menu-category">Dinner</h2>
                        <div class="menu-item">
                            <h3 class="item-title">Shrimp Scampi</h3>
                            Fresh shrimp from Gloucester and pasta handmade by a 33% Italian.
                        </div>
                        <div class="menu-item">
                            <h3 class="item-title">Chicken Dumplings</h3>
                            Pretty good dumplings for a 33% Italian white girl.
                        </div>`;
    main.appendChild(dinner);

    addDivider()

    var dessert = document.createElement("div");
    dessert.innerHTML = `<h2 class="menu-category">Dessert</h2>
                        <div class="menu-item">
                            <h3 class="item-title">Italian Sugar Cookies</h3>
                            A family recipe handed down through the generations. Lightly iced and perfectly chewy.
                        </div>
                        <div class="menu-item">
                            <h3 class="item-title">Smoothie of the Night</h3>
                            Smoothie made with fresh fruit. 
                        </div>`;
    main.appendChild(dessert);
}

function createMenuBreak(){
    var main = document.querySelector("main");
    
    var img1 = new Image();
    img1.src = Break;
    img1.classList.add("break");
    main.appendChild(img1);
}

function addDivider(){
    var divider = document.createElement("hr");
    divider.classList.add("divider");
    document.querySelector("main").append(divider);
}


export default createMenu