let pages = [
    {url: ".", title: "Home"},
    {url: "./projects", title: "Projects"},
    {url: "./contact", title: "Contact"},
    {url: "https://github.com/mfchao", title: "Github"},
];

let nav = document.createElement("nav");
document.body.prepend(nav);


let navTitle = document.createElement("p");
navTitle.textContent = "MIT Vis & Society";
navTitle.classList.add("class-name");
nav.append(navTitle);

let menu = document.createElement("div");
menu.classList.add("menu");
nav.append(menu);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    menu.append(a);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("currentPage");
    }   

    if (a.host !== location.host) {
        a.target = "_blank";
    }

    const ARE_WE_HOME = document.documentElement.classList.contains("home");
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
}




