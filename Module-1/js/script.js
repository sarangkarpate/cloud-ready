/*	   Called on page load		*/
$( document ).ready(function() {
	document.getElementById("question-2").style.display="none";
	document.getElementById("question-3").style.display="none";
	document.getElementById("question-4").style.display="none";
	document.getElementById("question-5").style.display="none";
	document.getElementById("question-6").style.display="none";
	document.getElementById("question-7").style.display="none";
	document.getElementById("priority").style.display="none";
	document.getElementById("score").style.display="none";
});

/* 	For highlighting the selected option	*/
function changeColor(divObj, question) {
	if(question === "question-1") {
		document.getElementById("option-1-1").style.background="#53a7ea";
		document.getElementById("option-1-2").style.background="#53a7ea";
		document.getElementById("option-1-3").style.background="#53a7ea";
		document.getElementById("option-1-4").style.background="#53a7ea";
		document.getElementById("option-1-5").style.background="#53a7ea";
		document.getElementById("option-1-6").style.background="#53a7ea";
		document.getElementById("option-1-7").style.background="#53a7ea";
		document.getElementById("option-1-8").style.background="#53a7ea";
	} else if (question === "question-2") {
		
	} else if (question === "question-3") {
		document.getElementById("option-3-1").style.background="#53a7ea";
		document.getElementById("option-3-2").style.background="#53a7ea";
		document.getElementById("option-3-3").style.background="#53a7ea";
	} else if (question === "question-4") {
		document.getElementById("option-4-1").style.background="#53a7ea";
		document.getElementById("option-4-2").style.background="#53a7ea";
		document.getElementById("option-4-3").style.background="#53a7ea";
	} else if (question === "question-5") {
		document.getElementById("option-5-1").style.background="#53a7ea";
		document.getElementById("option-5-2").style.background="#53a7ea";
		document.getElementById("option-5-3").style.background="#53a7ea";
	} else if (question === "question-6") {
		
	}
    divObj.style.background="#cc7565";
}

/*	For changing questions and storing details in JSON	*/
function change(currentDivName, newDivName) {
	
	if(currentDivName === "question-1") {
		if(document.getElementById("option-1-1").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "Banking";
		} else if(document.getElementById("option-1-2").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "Medical";
		} else if(document.getElementById("option-1-3").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "Defence";
		} else if(document.getElementById("option-1-4").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "E-Commerce";
		} else if(document.getElementById("option-1-5").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "Social Media";
		} else if(document.getElementById("option-1-6").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "Education";
		} else if(document.getElementById("option-1-7").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "Messaging Platform";
		} else if(document.getElementById("option-1-8").style.background === "rgb(204, 117, 101)") {
			input.application.domain = "Technological";
		}
	} else if(currentDivName === "question-2") {
		if(document.getElementById("r1").checked) {
			input.application.B2BorB2C = "B2B";
		} else if(document.getElementById("r2").checked) {
			input.application.B2BorB2C = "B2C";
		}
		if(document.getElementById("r19").checked) {
			input.application.missionCritical = true;
		} else if(document.getElementById("r20").checked) {
			input.application.missionCritical = false;
		}
		if(document.getElementById("r21").checked) {
			input.application.regulatoryRestriction = true;
		} else if(document.getElementById("r22").checked) {
			input.application.regulatoryRestriction = false;
		}
		if(document.getElementById("r23").checked) {
			input.application.manualInstallation = true;
		} else if(document.getElementById("r24").checked) {
			input.application.manualInstallation = false;
		}
	} else if(currentDivName === "question-3") {
		if(document.getElementById("option-3-1").style.background === "rgb(204, 117, 101)") {
			input.users = 500;
		} else if(document.getElementById("option-3-2").style.background === "rgb(204, 117, 101)") {
			input.users = 5000;
		} else if(document.getElementById("option-3-3").style.background === "rgb(204, 117, 101)") {
			input.users = 15000;
		}
	} else if(currentDivName === "question-4") {
		if(document.getElementById("option-4-1").style.background === "rgb(204, 117, 101)") {
			input.lifecycle = "High";
		} else if(document.getElementById("option-4-2").style.background === "rgb(204, 117, 101)") {
			input.lifecycle = "Medium";
		} else if(document.getElementById("option-4-3").style.background === "rgb(204, 117, 101)") {
			input.lifecycle = "Low";
		}
	} else if(currentDivName === "question-5") {
		if(document.getElementById("r3").checked) {
			input.externalDependencies.licensedProducts = true;
		} else if(document.getElementById("r4").checked) {
			input.externalDependencies.licensedProducts = false;
		}
		if(document.getElementById("option-5-1").style.background === "rgb(204, 117, 101)") {
			input.externalDependencies.os = "Windows";
		} else if(document.getElementById("option-5-2").style.background === "rgb(204, 117, 101)") {
			input.externalDependencies.os = "Linux";
		} else if(document.getElementById("option-5-3").style.background === "rgb(204, 117, 101)") {
			input.externalDependencies.os = "Other";
		}
		if(document.getElementById("r5").checked) {
			input.externalDependencies.multipleDatabases = true;
		} else if(document.getElementById("r6").checked) {
			input.externalDependencies.multipleDatabases = false;
		}
	} else if(currentDivName === "question-6") {
		if(document.getElementById("r7").checked) {
			input.technicalAspects.resources = false;
		} else if(document.getElementById("r8").checked) {
			input.technicalAspects.resources = true;
		}
		input.technicalAspects.storage.min = document.getElementById("minStorage").value;
		input.technicalAspects.storage.max = document.getElementById("maxStorage").value;
		storageUnit = $( "#storageUnit" ).val();
		if(storageUnit == 0) {
			input.technicalAspects.storage.unit = "MB";
		} else if(storageUnit == 1) {
			input.technicalAspects.storage.unit = "GB";
		} else if(storageUnit == 2) {
			input.technicalAspects.storage.unit = "TB";
		}
		if(document.getElementById("r9").checked) {
			input.technicalAspects.sessionManagement = true;
		} else if(document.getElementById("r10").checked) {
			input.technicalAspects.sessionManagement = false;
		}
		if(document.getElementById("r11").checked) {
			input.technicalAspects.networkArchitecture = true;
		} else if(document.getElementById("r12").checked) {
			input.technicalAspects.networkArchitecture = false;
		}
		if(document.getElementById("r13").checked) {
			input.technicalAspects.parallelProcessing = true;
		} else if(document.getElementById("r14").checked) {
			input.technicalAspects.parallelProcessing = false;
		}
		if(document.getElementById("r15").checked) {
			input.technicalAspects.localFileSystem = true;
		} else if(document.getElementById("r16").checked) {
			input.technicalAspects.localFileSystem = false;
		}
	} else if(currentDivName === "question-7") {
		input.cost.budget.min = document.getElementById("minBudget").value;
		input.cost.budget.max = document.getElementById("maxBudget").value;
		currencyUnit = $( "#currencyUnit" ).val();
		if(currencyUnit == 0) {
			input.cost.budget.unit = "INR";
		} else if(currencyUnit == 1) {
			input.cost.budget.unit = "Pound";
		} else if(currencyUnit == 2) {
			input.cost.budget.unit = "Dollar";
		} else if(currencyUnit == 3) {
			input.cost.budget.unit = "Yen";
		}
	} else if(currentDivName === "priority") {
		var idsInOrder = $("#sortable").sortable("toArray");
		input.priority.technologicalOptimizations = idsInOrder.indexOf("priorityTech") + 1;
		input.priority.cost = idsInOrder.indexOf("priorityCost") + 1;
		input.priority.easeOfIntegration = idsInOrder.indexOf("priorityIntegration") + 1;
		input.priority.popularCloudTechnology = idsInOrder.indexOf("priorityPopular") + 1;
		input.priority.security = idsInOrder.indexOf("prioritySecurity") + 1;
	}
	
	var currentDiv = $('#' + currentDivName);
	var newDiv = $('#' + newDivName);
	$(currentDiv).fadeOut("slow", function() {
		$(newDiv).fadeIn("slow");
	});
	
}

/* Output */

function init() {
    var c = document.getElementById('draw');
    return c.getContext('2d');
}

function clear(ctx) {
    ctx.clearRect(0, 0, 200, 200);
}

function PercentAnimation(ctx, percent) {
    this.ctx = ctx;
    this.speed = 4;
    this.x = 100;
    this.y = 100;
    this.radius = 75;
    
    this.setPercent = function(percent) {
        this.degrees = 360 * (percent / 100);
        this._animationOffset = this.degrees;
        this.percent = percent;
    };
    
    // Part of initialization
    this.setPercent(percent);

    this.startAnimation = function() {
        var self = this;
        clear(this.ctx);
        this._interval = setInterval(function() {
            self.drawAnimation();
        }, 10);
    };

    this.drawArc = function() {
        var startDegrees = -140;
        var endDegrees = startDegrees + this.degrees - this._animationOffset;
        // Degrees to radians
        var startAngle = startDegrees / 180 * Math.PI;
        var endAngle = endDegrees / 180 * Math.PI;
        // Draw arc
        this.setLineStyles();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
        ctx.stroke();
        this.drawText();
    };

    this.setLineStyles = function() {
		//ctx.strokeStyle = 'rgb(0, 128, 128)';
		if(this.percent < 31) {
    		ctx.strokeStyle = "#FF0000";
    	} else if(this.percent < 70) {
    		ctx.strokeStyle = "#D9A200";
    	} else {
			ctx.strokeStyle = "#007300";
    	}
        ctx.lineWidth = 20;
    };

    this.drawAnimation = function() {
        if (this._animationOffset < 0) {
            this._animationOffset = 0;
        }
        clear(this.ctx);
        this.drawArc();
        this._animationOffset -= this.speed;
        if (this._animationOffset < 0) {
            clearInterval(this._interval);
        }
    };

    this.drawText = function() {
    	if(this.percent < 31) {
    		ctx.fillStyle = "#FF0000";
    	} else if(this.percent < 70) {
    		ctx.fillStyle = "#D9A200";
    	} else {
			ctx.fillStyle = "#007300";
    	}
        //ctx.fillStyle = "#14626c";
        ctx.font = "bold 25px verdana";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(' ' + this.percent + '%', this.x, this.y);
    };

}

/*------------COMPUTATION PHASE------------*/

/* KEY:
	ALPHA means CR score calculation
	BETA means Offering (includes IaaS, PaaS, SaaS)
	GAMMA means Public / Private / Hybrid
*/

function assignScoreOnPriority(inputText) {
	switch(inputText){ 
		case "Low": return 1;
			break;
		case "Medium": return 5;
			break;
		case "High": return 10;
			break;
		case false: return 10;	//Note generalizing this because normally for the given questions False is equating to cloud-friendly: MAY NEED TO CHANGE THIS LATER / CONFIRM****
			break;
		case true: return 1;
			break;
		}
}

function assignScoreOnScalePriority(inputUsers) {
if(users < 1000)
	return 1;
else if (users < 10000)
	return 5;
else 
	return 10;
}

function calculatePercentage(){
	// Alpha Calculation
	var score = 0;
	switch(input.application.domain) {
		case "Banking": score=score+5;
			break;
		case "Medical": score=score+5;
			break;
		case "Defence": score=score+1;
			break;
		case "E-Commerce": score=score+10;
			break;
		case "Social Media": score=score+10;
			break;
		case "Education": score=score+10;
			break;
		case "Messaging Platform": score=score+10;
			break;
		case "Technological": score=score+10;
			break;
	}

	score = score 
			+ assignScoreOnPriority(input.application.dependency) 
			+ assignScoreOnPriority(input.application.computing) 
			+ assignScoreOnPriority(input.application.missionCritical) 
			+ assignScoreOnPriority(input.application.regulatoryRestriction) 
			+ assignScoreOnPriority(input.application.security) 
			+ assignScoreOnPriority(input.application.manualInstallation) 
			+ assignScoreOnScalePriority(input.users) 
			+ assignScoreOnPriority(input.lifecycle) 
			+ assignScoreOnPriority(input.externalDependencies.licensedProducts) 
			+ assignScoreOnPriority(input.externalDependencies.multipleDatabases) 
			+ assignScoreOnPriority(input.technicalAspects.resources) 
			+ assignScoreOnPriority(input.technicalAspects.sessionManagement) 
			+ assignScoreOnPriority(input.technicalAspects.networkArchitecture) 
			+ assignScoreOnPriority(input.technicalAspects.parallelProcessing) 
			+ assignScoreOnPriority(input.technicalAspects.localFileSystem) 
			+ assignScoreOnPriority(input.cost.geographicalAvailability);

	return (score * 100 / 1700);
}

function initText(percentage) {
	this.percent = percentage;
	var div = document.getElementById('result');
	var div2 = document.getElementById('analysis');

	if(this.percent < 31) {
    		div.innerHTML = "Cloud-Ready score is <strong>Low</strong>.<br>Your Application is <strong>Cloud Averse</strong>";
    		div.style.color = "red";
    		div2.innerHTML = "Moving / Building your application on a cloud platform is not very feasible. Please consider other options";
    	} else if(this.percent < 70) {
    		div.innerHTML = "Cloud-Ready score is <strong>Medium</strong>.<br>Your Application is <strong>Cloud Neutral</strong>";
    		div.style.color = "#D9A200";
    		div2.innerHTML = "The pros of moving / developing your application to the Cloud are comparable if not more than the cons."
    	} else {
			div.innerHTML = "Cloud-Ready score is <strong>High</strong>.<br>Your Application is <strong>Cloud Ready</strong>";
    		div.style.color = "green";
    		div2.innerHTML = "Your application is ideal for a Cloud Platform";
    	}
}


function showPercentage() {
	var ctx = init();
	//var percentage = Math.floor(calculatePercentage());	
	var percent = Math.floor(Math.random() * 101);
	var percentage = Math.floor(percent);
	var anim = new PercentAnimation(ctx, percentage);
	anim.setPercent(percentage);
	anim.startAnimation();

	var s = initText(percentage);
};


/*		JSON processing			*/

var input = new Object();
input.application = new Object();
input.application.domain = "";	//Please refer switch case in the function above for setting this appropriately
input.application.dependency = "";   //Set this on input (STOI) to LOW / MEDIUM / HIGH
input.application.B2BorB2C = "";
input.application.computing = "";
input.application.missionCritical = false;
input.application.regulatoryRestriction = false;
input.application.security = "";
input.application.manualInstallation = false;
input.users = "";
input.lifecycle = "";				// STOI
input.externalDependencies = new Object();
input.externalDependencies.licensedProducts = false;
input.externalDependencies.os = "";
input.externalDependencies.multipleDatabases = false;
input.technicalAspects = new Object();
input.technicalAspects.resources = "";	//STOI
input.technicalAspects.storage = new Object();
input.technicalAspects.storage.min = "";
input.technicalAspects.storage.max = "";
input.technicalAspects.storage.unit = "";
input.technicalAspects.sessionManagement = false;
input.technicalAspects.networkArchitecture = false;
input.technicalAspects.parallelProcessing = false;
input.technicalAspects.localFileSystem = false;
input.technicalAspects.userScalibility = ""; 
input.cost = new Object();
input.cost.budget = new Object();
input.cost.budget.min = "";
input.cost.budget.max = "";
input.cost.budget.unit = "";
input.cost.geographicalAvailability = "";	//STOI
input.priority = new Object();
input.priority.technologicalOptimizations = 0;
input.priority.cost = 0;
input.priority.easeOfIntegration = 0;
input.priority.popularCloudTechnology = 0;
input.priority.security = 0;

/*----Output JSON Parameters----*/
var output = new Object();
output.Alpha
output.Beta
output.Gamma

$(function() {
    var valMap = [1, 25, 50, 100];
	$( "#dependency-slider" ).css('background', '#777');
	$( "#dependency-slider .ui-slider-range" ).css('background', '#777');
    $("#dependency-slider").slider({
        min: 1,
        max: valMap.length - 1,
        value: 0,
        slide: function(event, ui) { 
			if(valMap[ui.value] == 25) {
				$("#dependency").val("Low"); 
				input.application.dependency = "Low";
			} else if(valMap[ui.value] == 50) {
				$("#dependency").val("Medium");      
				input.application.dependency = "Medium";				
			} else if(valMap[ui.value] == 100) {
				$("#dependency").val("High"); 
				input.application.dependency = "High";
			}
        }       
    });
});

$(function() {
    var valMap = [1, 25, 50, 100];
	$( "#computing-slider" ).css('background', '#777');
	$( "#computing-slider .ui-slider-range" ).css('background', '#777');
    $("#computing-slider").slider({
        min: 1,
        max: valMap.length - 1,
        value: 0,
        slide: function(event, ui) { 
			if(valMap[ui.value] == 25) {
				$("#computing").val("Low"); 
				input.application.computing = "Low";
			} else if(valMap[ui.value] == 50) {
				$("#computing").val("Medium");      
				input.application.computing = "Medium";				
			} else if(valMap[ui.value] == 100) {
				$("#computing").val("High"); 
				input.application.computing = "High";
			}
        }       
    });
});

$(function() {
    var valMap = [1, 25, 50, 100];
	$( "#security-slider" ).css('background', '#777');
	$( "#security-slider .ui-slider-range" ).css('background', '#777');
    $("#security-slider").slider({
        min: 1,
        max: valMap.length - 1,
        value: 0,
        slide: function(event, ui) { 
			if(valMap[ui.value] == 25) {
				$("#security").val("Low"); 
				input.application.security = "Low";
			} else if(valMap[ui.value] == 50) {
				$("#security").val("Medium");      
				input.application.security = "Medium";				
			} else if(valMap[ui.value] == 100) {
				$("#security").val("High"); 
				input.application.security = "High";
			}
        }       
    });
});

$(function() {
    var valMap = [1, 25, 50, 100];
	$( "#geo-slider" ).css('background', '#777');
	$( "#geo-slider .ui-slider-range" ).css('background', '#777');
    $("#geo-slider").slider({
        min: 1,
        max: valMap.length - 1,
        value: 0,
        slide: function(event, ui) { 
			if(valMap[ui.value] == 25) {
				$("#geo").val("Local"); 
				input.cost.geographicalAvailability = "Local";
			} else if(valMap[ui.value] == 50) {
				$("#geo").val("Country");      
				input.cost.geographicalAvailability = "Country";				
			} else if(valMap[ui.value] == 100) {
				$("#geo").val("Global"); 
				input.cost.geographicalAvailability = "Global";
			}
        }       
    });
});

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
