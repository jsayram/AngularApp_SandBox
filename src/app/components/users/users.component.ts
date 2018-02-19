import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]; 
  showExtended: boolean = true; 
  loaded: boolean = true;
  enableAdd: boolean = true;
  currentClasses = {};



  constructor() { }

  ngOnInit() {
		this.users = [
  		{
			firstName: 'Jhon',
			lastName: 'Doe',
			age: 45,
			address: {
				street: '50 main st',
				city: 'Boston',
				state: 'MA'
			},
			image: 'http://lorempixel.com/600/600/people/4',
			isActive: true
		},
		{
			firstName: 'Kevin',
			lastName: 'Pizza',
			age: 70,
			address: {
				street: '20 School St',
				city: 'Lynn',
				state: 'MASS'
			},
			image: 'http://lorempixel.com/600/600/people/3',
			isActive: false
		},
	    {
			firstName: 'Karen',
			lastName: 'Williams',
			age: 6,
			address: {
				street: '55 Mill St',
				city: 'Miami',
				state: 'FL'
			},
			image: 'http://lorempixel.com/600/600/people/2',
			isActive: true

		}

  	];
    
    //  this.addUser({
	// 		firstName: 'David',
	// 		lastName: 'Jackson',
	// 		age: 23,
	// 		address: {
	// 			street: '55 pizza st',
	// 			city: 'cville',
	// 			state: 'VA'
	// 		},
	// 		image: 'http://lorempixel.com/600/600/people/1'
	// })

	this.setCurrentClasses();


  }//end of ngInit()



  addUser(user: User) {
  	this.users.push(user);
  }

  setCurrentClasses(){
  	this.currentClasses = {
  		'btn-outline-success': this.enableAdd,
  		'big-text': this.showExtended
  	}
  }
}










