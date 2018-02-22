import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class DataService {
	users: User[];

  constructor() {
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
	  	

  }

  getUsers(): User[] {
  	console.log('fetching users from service');
  	return this.users;
  }

  addUser(user: User){
  	this.users.unshift(user);
  }

}
