function getContent(fragmentId) {

	var partials = {
		index : "This is my Home page.",
		about : "This is the About page.",
		contact : "This is the Contact page."
	};

	return partials[fragmentId];
}

function navigate() {
	var contentDiv = document.getElementById("content");

	var fragmentId = location.hash.substr(1);

	contentDiv.innerHTML = getContent(fragmentId);

	if (fragmentId == "index")
		contentDiv.setAttribute("style", "border-color: #FFBB33; background-color: #9ecaed");
	else if (fragmentId == "about")
		contentDiv.setAttribute("style", "color: #eee; background-color: #AA66CC");
	else if (fragmentId == "contact")
		contentDiv.setAttribute("style", "color: #eee; background-color: #99CC00");
	else
		contentDiv.setAttribute("style", "background-color: #FFBB33");
}

if (!location.hash) {
	location.hash = "#index";
}

navigate();

window.addEventListener("hashchange", navigate);