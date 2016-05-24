/*	   Called on page load		*/
$( document ).ready(function() {
	document.getElementById("question-2").style.display="none";
	document.getElementById("question-3").style.display="none";
	document.getElementById("question-4").style.display="none";
	document.getElementById("question-5").style.display="none";
	document.getElementById("question-6").style.display="none";
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

/*	For changing questions and storing details in JSON	*/
function change(currentDivName, newDivName) {
	
	if(currentDivName === "question-1") {
		if(document.getElementById("option-1-1").style.background === "rgb(204, 117, 101)") {
			input.application.type = "Personal Productivity";
		} else if(document.getElementById("option-1-2").style.background === "rgb(204, 117, 101)") {
			input.application.type = "Dependent on other services";
		} else if(document.getElementById("option-1-3").style.background === "rgb(204, 117, 101)") {
			input.application.type = "Little/No dependency on other services";
		} else if(document.getElementById("option-1-4").style.background === "rgb(204, 117, 101)") {
			input.application.type = "B2B/B2C";
		} else if(document.getElementById("option-1-5").style.background === "rgb(204, 117, 101)") {
			input.application.type = "Heavy Computing";
		} else if(document.getElementById("option-1-6").style.background === "rgb(204, 117, 101)") {
			input.application.type = "Mission Critical";
		} else if(document.getElementById("option-1-7").style.background === "rgb(204, 117, 101)") {
			input.application.type = "Seurity/Regulatory";
		}
		if(document.getElementById("r1").checked) {
			input.application.manualInstallation = true;
		} else if(document.getElementById("r2").checked) {
			input.application.manualInstallation = false;
		}
	} else if(currentDivName === "question-2") {
		
	} else if(currentDivName === "question-3") {
		if(document.getElementById("option-3-1").style.background === "rgb(204, 117, 101)") {
			input.lifecycle = "Early";
		} else if(document.getElementById("option-3-2").style.background === "rgb(204, 117, 101)") {
			input.lifecycle = "Stable";
		} else if(document.getElementById("option-3-3").style.background === "rgb(204, 117, 101)") {
			input.lifecycle = "Near to closure";
		}
	} else if(currentDivName === "question-4") {
		if(document.getElementById("r3").checked) {
			input.externalDependencies.licensedProducts = true;
		} else if(document.getElementById("r4").checked) {
			input.externalDependencies.licensedProducts = false;
		}
		input.externalDependencies.os = document.getElementById("os").value;
		input.externalDependencies.database = document.getElementById("db").value;
		if(document.getElementById("r5").checked) {
			input.externalDependencies.multipleDatabases = true;
		} else if(document.getElementById("r6").checked) {
			input.externalDependencies.multipleDatabases = false;
		}
	} else if(currentDivName === "question-5") {
		if(document.getElementById("r7").checked) {
			input.technicalAspects.resources = "Shared";
		} else if(document.getElementById("r8").checked) {
			input.technicalAspects.resources = "Dedicated";
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
	} else if(currentDivName === "question-6") {
		if(document.getElementById("r17").checked) {
			input.cost.geographicalAvailability = true;
		} else if(document.getElementById("r18").checked) {
			input.cost.geographicalAvailability = false;
		}
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
		ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.lineWidth = 10;
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
        ctx.fillStyle = "#f00";
        ctx.font = "bold 25px verdana";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(' ' + this.percent + '%', this.x, this.y);
    };

}

function showPercentage() {
	var ctx = init();
	var percentage = 85;
	var anim = new PercentAnimation(ctx, percentage);
	var percent = Math.floor(Math.random() * 101);
	anim.setPercent(percent);
	anim.startAnimation();
};

/*		JSON processing			*/

var input = new Object();
input.application = new Object();
input.application.type = "";
input.application.manualInstallation = false;
input.users = "";
input.lifecycle = "";
input.externalDependencies = new Object();
input.externalDependencies.licensedProducts = false;
input.externalDependencies.os = "";
input.externalDependencies.database = "";
input.externalDependencies.multipleDatabases = false;
input.technicalAspects = new Object();
input.technicalAspects.resources = "";
input.technicalAspects.storage = "";
input.technicalAspects.sessionManagement = false;
input.technicalAspects.networkArchitecture = false;
input.technicalAspects.parallelProcessing = false;
input.technicalAspects.localFileSystem = false;
input.cost = new Object();
input.cost.budget = "";
input.cost.geographicalAvailability = false;
