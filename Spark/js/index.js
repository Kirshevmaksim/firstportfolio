a=1;
function mine(){
	if (a>0) {
		a=a-1;
		document.getElementById('Count').innerHTML=a;
	}
}
function plus(){
	a=a+1;
	document.getElementById('Count').innerHTML=a;
}