import  { Component } from '@angular/core';

@Component({
	selector:'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']

})

export class UserComponent {

	//properties 
	firstName: string;
	lastName: string;
	age: number; 
	address;

	foo:any; 
	haskids: boolean;
	//adding brackets just say it must be an array
	numberArray: number[];
	stringArray: string[];
	mixedArray: any[];

	//this is what we can use for typescript
	myTuple: [string, number, boolean];
	unusable: void; 
	u : undefined; 
	n : null; 

	//methods 
	constructor(){
		this.firstName = "Jose";
		this.lastName = "Ramirez";
		
		this.address = {
			street: '50 Main St',
			city: 'Boston',
			state: 'MA'
		};
		this.foo = true;
		this.haskids = true; 
		this.numberArray = [1, 2, 3];
		this.stringArray = ["hello", "pizza"];
		this.mixedArray = [1,"drink",true];
		this.myTuple = ['hello', 4, false];
		this.u = undefined; 
		this.n = null;
		console.log("My numbers: " + this.addNumbers(1, 10));
	}

	showAge(){
		return this.age +4;
	}

	addNumbers(num1: number, num2: number): number {
		return num1+num2;
	}
}










