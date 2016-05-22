$( document ).ready(function() {
	document.getElementById("question-2").style.display="none";
});

function changeColor(divObj) {
	document.getElementById("option-1-1").style.background="#53a7ea";
	document.getElementById("option-1-2").style.background="#53a7ea";
	document.getElementById("option-1-3").style.background="#53a7ea";
	document.getElementById("option-1-4").style.background="#53a7ea";
	document.getElementById("option-1-5").style.background="#53a7ea";
	document.getElementById("option-1-6").style.background="#53a7ea";
	document.getElementById("option-1-7").style.background="#53a7ea";
    divObj.style.background="#cc7565";
}

function change(currentDivName, newDivName) {
	
	var currentDiv = $('#' + currentDivName);
	var newDiv = $('#' + newDivName);
	$(currentDiv).fadeOut("slow", function() {
		$(newDiv).fadeIn("slow");
	});
	
}