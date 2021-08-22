function createMenu(){
    var main = document.querySelector("main");
    main.id = "content-menu";

    var title = document.createElement("h1");
    title.textContent = "Menu";

    main.appendChild(title);
}

export default createMenu