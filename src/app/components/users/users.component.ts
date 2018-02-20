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
  loaded: boolean = false;
  enableAdd: boolean = true;

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



  addUser(user: User) {
  	this.users.push(user);
  }
  
  // toggleHide(user: User) {
  //  	user.hide = !user.hide;
  // }


}










