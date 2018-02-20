import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
}) 
export class UsersComponent implements OnInit {
  user: User = {
  	firstName: '',
  	lastName: '',
  	age: null,
  	address: {
  		street: '',
  		city: '',
  		state: ''
  	}
  }
  users: User[]; 
  showExtended: boolean = true; 
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false; 

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
			isActive: true,
			registered: new Date('01/02/2018 08:30:00'),
			hide: true
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
			isActive: false,
			registered: new Date('03/11/2017 06:20:00'),
			hide: true
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
			isActive: true,
			registered: new Date('11/02/2016 10:30:00'),
			hide: true

		}

  	];

 	this.loaded = true;

  }//end of ngInit()

  addUser() {
  	this.user.isActive = true; 
  	this.user.registered = new Date();
  	this.users.unshift(this.user);
  	this.user = {
  		firstName: '',
  		lastName: '',
  		age: null,
  		address: {
  			street: '',
  			city: '',
  			state: ''
  		}
 	 }
  };
  
  // toggleHide(user: User) {
  //  	user.hide = !user.hide;
  // }

  //Add new user button eventForm listener
  onSubmit(e){
  	console.log(123);
  	e.preventDefault();
  }

  fireEvent(e) {
  	console.log("fireEvent...");
  	console.log(e.type);
  	console.log(e.target.value);
  }

}










