var elemDiv=[];
var elem=[];
var elemValue=[];
var step;
var option;

function check(){
	option=document.getElementById("select").value;
	elemDiv=document.getElementByClassName("area-cat-div");
	console.log(option);

	if (option=="lessArea"||option=="moreArea"){
		elem=document.getElementByClassName("Area");
	}
	else if (option=="lessPrice"||option=="morePrice"){
		elem=document.getElementByClassName("Price");
	}
	for (step = 0; step < elem.length; step++){
		elemValue[step]=elem[step].getAttribute("value");
	}
	console.log(elemValue);
	for (step = 0; step < elem.length; step++){
		if (option=="lessArea"||option=="lessPrice") {
			elemDiv[step].style.order=elemValue[step];
		}
		else if (option=="moreArea"||option=="morePrice") {
			elemDiv[step].style.order=-elemValue[step];
		}
	}
}