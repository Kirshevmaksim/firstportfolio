function ChangeFirstBlockImageBum() {
	document.getElementById('Al').classList.add("hide");
	document.getElementById('bum').classList.remove("hide");
	document.getElementById('AlButton').classList.remove("activeButton");
	document.getElementById('bumButton').classList.add("activeButton");
}
function ChangeFirstBlockImageAl() {
	document.getElementById('Al').classList.remove("hide");
	document.getElementById('bum').classList.add("hide");
	document.getElementById('AlButton').classList.add("activeButton");
	document.getElementById('bumButton').classList.remove("activeButton");
}
