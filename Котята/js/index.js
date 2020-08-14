$(document).ready(function(){
	const slider=$("#slider").owlCarousel({
		items:1,
		loop:true,
		smartspeed:500,
		nav: true,
		dots: true,
		navText: [
	'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <circle cx="30" cy="28" r="18" fill="white"/> </g> <path d="M31 24L27 28L31 32" stroke="#FF7236" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <defs> <filter id="filter0_d" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="2"/> <feGaussianBlur stdDeviation="6"/> <feColorMatrix type="matrix" values="0 0 0 0 0.679167 0 0 0 0 0.59545 0 0 0 0 0.559826 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg>',
	'<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <circle cx="30" cy="28" r="18" fill="white"/> </g> <path d="M29 32L33 28L29 24" stroke="#FF7236" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <defs> <filter id="filter0_d" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="2"/> <feGaussianBlur stdDeviation="6"/> <feColorMatrix type="matrix" values="0 0 0 0 0.679167 0 0 0 0 0.59545 0 0 0 0 0.559826 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg>'
	]
	});
});
var images;
function change(el){
	images=el.getAttribute("src");
	images="url("+images+")";
	document.getElementById('main-img').style.backgroundImage=images;
}


