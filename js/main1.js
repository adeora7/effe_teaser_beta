function contactUs(){

	document.getElementById("right").style.right="-320px";
	document.getElementById("left").style.left="0px";
	
}
function closeContactUs(){
	document.getElementById("left").style.left="-335px";
}
function campusAmbassador(){
	document.getElementById("left").style.left="-335px";
	document.getElementById("right").style.right="0px";
}
function closeCampusAmbassador(){
	document.getElementById("right").style.right="-320px";
}

function show_details(e){
	var name = e.getAttribute('name');
	var position = e.getAttribute('position');
	var mobile = e.getAttribute('mobile');
	var email = e.getAttribute('email');
	$("#window-name").html(name);
	$("#window-position").html(position);
	$("#window-mobile").html(mobile);
	$("#window-email").html(email);
	TweenMax.staggerTo("#contact-window", 0.5, {
					y: "350px",
				opacity: 1,
				ease: Power2.easeOut
			},0.2);
}

function hide_details(e){
	//alert(e.getAttribute('name'));
	TweenMax.staggerTo("#contact-window", 0.5, {
					y: "-150px",
				opacity: 0,
				ease: Power2.easeOut
			},0.2);
}