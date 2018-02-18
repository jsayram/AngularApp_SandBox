import  { Component } from '@angular/core';

@Component({
	selector:'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']

})

export class UserComponent {

	//properties 
	firstName = 'Jhon';
	lastName = 'smith';
	age = 30; 
	address = {
		street: '50 Main St',
		city: 'Boston',
		state: 'MA'
	};

	//methods 
	constructor(){
		
	}

	showAge(){
		return this.age +4;
	}

}