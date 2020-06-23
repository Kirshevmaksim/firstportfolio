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
function OpenPlicce(){
	document.getElementById('plicce2').classList.remove("hide");
	document.getElementById('plicce').classList.add("hide");
}
function ClosePlicce(){
	document.getElementById('plicce2').classList.add("hide");
	document.getElementById('plicce').classList.remove("hide");
}
var input1, input2, result;
var prise=300;
function MathCalc(){
	if (input1>0 && input2>0) {
	input1=document.getElementById("inp1").value;
	input2=document.getElementById("inp2").value;
	result=input1*input2*prise;
	document.getElementById("res").innerHTML="Итого: "+result+" Dollars";
	}
	if (input1 != 0 || input2 != 0) {
		document.getElementById("res").innerHTML="Вы ввели неверные значения"
	}	
}
function OpenRollup(){
	document.getElementById('roll').classList.remove("rollup-hide");
}
function CloseRollup(){
	document.getElementById('roll').classList.add("rollup-hide");
}