'use strict';

class Car {
	constructor(name,domElement,positionX,positionY){
		this.name = name;
		this.domElement=domElement;
		this.domElement.style.top=positionX;
		this.domElement.style.left=positionY;
		console.log(this.domElement);
	}
	changeDirection(direction){

	}
	move(){
		this.setIntervalId = setInterval(frame, 5);
		var pos=parseInt(this.domElement.style.left);
		var domElement = this.domElement;
	  	function frame() {
	  		  pos++;
		      domElement.style.left = pos + 'px'; 
		    }
	  	}
	stop(){
		if(this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}
	reverse(){

	}
}

class RemoteControl{
	constructor(car){
		this.car=car;
		console.log(this.car);
	}
	moveLeft(){
		this.car.changeDirection('Left');
		this.car.move();
	}
	moveRight(){
		this.car.changeDirection('Right');
		this.car.move();
	}
	doReverse(){
		this.car.reverse();
	}
	goForward(){
		this.car.move();
	}
	accelerate(){

	}
	hitBreak(){
		console.log(this.car);
		this.car.stop();
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
// Create the car object
var elem = document.getElementById("car");  
var car = new Car('BMW',elem,0,0);
var remote = new RemoteControl(car);

// Add Listener for Buttons
document.getElementById("start").addEventListener("click", function(event){
	remote.goForward();
});
document.getElementById("stop").addEventListener("click", function(event){
	remote.hitBreak();
});
});



