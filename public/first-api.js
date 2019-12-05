document.addEventListener("DOMContentLoaded", function() {
	
	const brandsElem = document.querySelector(".brands");
	const brandListTemplateElem = document.querySelector(".brandListTemplate");
	const brandListTemplate = Handlebars.compile(brandListTemplateElem.innerHTML);

	brandsElem.innerHTML = "all working";
	
});