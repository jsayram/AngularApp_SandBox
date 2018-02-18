import  { Component } from '@angular/core';
import {User} from '../../models/User';

@Component({
	selector:'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']

})

export class UserComponent {
	//properties 
	user: User; 
	//methods 
	constructor(){
		this.user = {
			firstName: 'Jhon',
			lastName: 'Doe',
			age: 30,
			address: {
				street: '50 main st',
				city: 'Boston',
				state: 'MA'
			}
		}
		
	}
}








