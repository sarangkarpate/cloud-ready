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
        //ctx.strokeStyle = 'rgb(232, 222, 63)';
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
	//e.preventDefault();
	var ctx = init();
	var percentage = 85;
	var anim = new PercentAnimation(ctx, percentage);
	var percent = Math.floor(Math.random() * 101);
	anim.setPercent(percent);
	anim.startAnimation();
};
