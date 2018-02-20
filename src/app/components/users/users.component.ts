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
  	email: ''
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
			firstName: 'jhon',
			lastName: 'Doe',
			email: 'jhon@gmail.com',
			isActive: true,
			registered: new Date('01/02/2018 08:30:00'),
			hide: true
		},
		{
			firstName: 'kevin',
			lastName: 'Pizza',
			email: 'kevin@yahoo.com',
			isActive: false,
			registered: new Date('03/11/2017 06:20:00'),
			hide: true
		},
	    {
			firstName: 'Karen',
			lastName: 'Williams',
			email: 'karen@gmail.com',
			isActive: true,
			registered: new Date('11/02/2016 10:30:00'),
			hide: true
		}

  	];

 	this.loaded = true;

  }//end of ngInit()

  // addUser() {
  // 	this.user.isActive = true; 
  // 	this.user.registered = new Date();
  // 	this.users.unshift(this.user);
  // 	this.user = {
  // 		firstName: '',
  // 		lastName: '',
  // 		email: ''
 	//  }
  // };

  //Add new user button eventForm listener
  onSubmit(e){
  	console.log(123);
  	e.preventDefault();
  }

}










