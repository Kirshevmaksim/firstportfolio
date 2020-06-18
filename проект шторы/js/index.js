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
function ChangeThirdBlockImageUniZebra() {
	document.getElementById('Zebra').classList.add("hide");
	document.getElementById('Uni-Zebra').classList.remove("hide");
	document.getElementById('ZebraButton').classList.remove("activeButton");
	document.getElementById('Uni-ZebraButton').classList.add("activeButton");
}
function ChangeThirdBlockImageZebra() {
	document.getElementById('Zebra').classList.remove("hide");
	document.getElementById('Uni-Zebra').classList.add("hide");
	document.getElementById('ZebraButton').classList.add("activeButton");
	document.getElementById('Uni-ZebraButton').classList.remove("activeButton");
}
