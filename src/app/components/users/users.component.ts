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



  constructor() { }

  ngOnInit() {
		this.users = [
  		{
			firstName: 'Jhon',
			lastName: 'Doe',
			age: 30,
			address: {
				street: '50 main st',
				city: 'Boston',
				state: 'MA'
			},
			image: 'http://lorempixel.com/600/600/people/4'
		},
		{
			firstName: 'Kevin',
			lastName: 'Pizza',
			age: 34,
			address: {
				street: '20 School St',
				city: 'Lynn',
				state: 'MASS'
			},
			image: 'http://lorempixel.com/600/600/people/3'
		},
	    {
			firstName: 'Karen',
			lastName: 'Williams',
			age: 26,
			address: {
				street: '55 Mill St',
				city: 'Miami',
				state: 'FL'
			},
			image: 'http://lorempixel.com/600/600/people/2'

		}

  	];
    
 //  	this.addUser({
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


  }//end of ngInit()





  addUser(user: User) {
  	this.users.push(user);
  }



}










