var count = 0;
var seconds = 0;
var minute = 10;

document.getElementById('start-btn').addEventListener("click",makeBtnEnable);
document.getElementById('click-btn').addEventListener("click",appendClicksToSection);
document.getElementById('click-btn').addEventListener("click",timer);
//disables the enter button and space button
document.getElementById('click-btn').onkeydown = function(e){
	var key = e.charCode || e.keyCode;
	if(key == 13 || key== 32){
		return false;
	}
	else{
		e.preventDefault();
	}
}
//executes only on the first click
function timer(e){
	if(count < 2){
		var timer = setInterval(countDownTimer, 1000);
	}	
}
//increments the number every time the button clicked
function appendClicksToSection(){
	var numberOfClicks = document.getElementById("number-of-clicks");
	count = count+1;
	numberOfClicks.innerHTML = count;
}
//enables the disabled CLICK button 
function makeBtnEnable(){
	var enableBtn = document.getElementById("click-btn");
	enableBtn.style.backgroundColor = 'lightgreen';
	enableBtn.disabled = false;
}
//executes every second until the 
function countDownTimer(){
	if(seconds < minute){
		seconds = seconds + 1;
		document.getElementById("count-down-timer").innerHTML = seconds;
	}
	else{
		window.clearInterval(timer);
		document.getElementById("click-btn").disabled = true;
		document.getElementById("click-btn").style.backgroundColor = "white";
	}
}
