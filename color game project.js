var squares=document.querySelectorAll(".square");
var numberOfSquares=6;
var colors=generateColors(numberOfSquares);
var correctColor;
var message=document.querySelector("#message");
var colorDisplay=document.querySelector("#color");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("button");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numberOfSquares = this.textContent === "Easy" ? 3 : 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === correctColor){
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} 
			else {
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function reset(){
	colors = generateColors(numberOfSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	resetButton.textContent = "New Colors"
	message.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} 
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(N){
	var a=[];
	for (var i=0;i<N;i++){
		a.push(generateColor());
	}
	return a;
}

function generateColor() {
	var r=Math.floor(256*Math.random());
	var g=Math.floor(256*Math.random());
	var b=Math.floor(256*Math.random());
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", reset);




