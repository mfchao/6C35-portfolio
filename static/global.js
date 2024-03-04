

let pages = [
    {url: ".", title: "Home"},
    {url: "projects", title: "Projects"},
    {url: "contact", title: "Contact"},
];


let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
	let url = p.url;
	let title = p.title;
	let a = document.createElement("a");
	a.href = url;
	a.textContent = title;
	nav.append(a);


	console.log("Created link with URL:", a.pathname , "and title:", location.pathname);

	if (a.host === location.host && a.pathname === location.pathname) {
		a.classList.add("currentPage");
	}	

    if (a.host !== location.host) {
        a.target = "_blank";
    }

	const ARE_WE_HOME = document.documentElement.classList.contains("home");
	url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
	
}




