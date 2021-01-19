document.addEventListener("DOMContentLoaded", function (event) {
	console.log(document.getElementById("search_button"));

function search_function () {
	var search_input = document.getElementById("search_input");

	if (search_input === "Ivan" || search_input === "ivan" || search_input === "Ivan the terrible" || search_input === "ivan the terrible") {

		var message = "Hello " + search_input;
	}
}

})

