$( document ).ready(function() {
	document.getElementById("question-2").style.display="none";
	document.getElementById("question-3").style.display="none";
	document.getElementById("question-4").style.display="none";
	document.getElementById("question-5").style.display="none";
	document.getElementById("question-6").style.display="none";
	document.getElementById("score").style.display="none";
});

function changeColor(divObj, question) {
	if(question === "question-1") {
		document.getElementById("option-1-1").style.background="#53a7ea";
		document.getElementById("option-1-2").style.background="#53a7ea";
		document.getElementById("option-1-3").style.background="#53a7ea";
		document.getElementById("option-1-4").style.background="#53a7ea";
		document.getElementById("option-1-5").style.background="#53a7ea";
		document.getElementById("option-1-6").style.background="#53a7ea";
		document.getElementById("option-1-7").style.background="#53a7ea";
	} else if (question === "question-2") {
		
	} else if (question === "question-3") {
		document.getElementById("option-3-1").style.background="#53a7ea";
		document.getElementById("option-3-2").style.background="#53a7ea";
		document.getElementById("option-3-3").style.background="#53a7ea";
	} else if (question === "question-5") {
		
	} else if (question === "question-6") {
		
	}
    divObj.style.background="#cc7565";
}

function change(currentDivName, newDivName) {
	
	var currentDiv = $('#' + currentDivName);
	var newDiv = $('#' + newDivName);
	$(currentDiv).fadeOut("slow", function() {
		$(newDiv).fadeIn("slow");
	});
	
}

/* Output */
