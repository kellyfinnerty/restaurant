function createMenu(){
    var main = document.querySelector("main");

    var title = document.createElement("h1");
    title.textContent = "Menu";

    main.appendChild(title);
}

export default createMenu