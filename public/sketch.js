var socket;


function setup() {
	createCanvas(860,680);
	background(88);
	socket = io.connect('http://localhost:8090');
	socket.on('mouse',newDrawing);
}

function draw() {
	fill(88,00,55,5);
	rect(0,0,width,height);  
}

function newDrawing(data){
//	noStroke();
	fill(255,255,0);
	ellipse(data.x,data.y,60,60);
}

function mouseDragged(){
	var data = {
		x: mouseX,
		y:mouseY
	}
	
	socket.emit('mouse',data);
	stroke(1);
	fill(255);
	ellipse(mouseX,mouseY,60,60);
	console.log(mouseX + ',' + mouseY);
}
