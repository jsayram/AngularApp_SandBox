import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
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
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
	
	this.users = this.dataService.getUsers();	
 	
 	this.loaded = true;

  }//end of ngInit()

  //Add new user button Temmplate Driven From
  onSubmit({value, valid}: {value: User, valid: boolean}){
  	if(!valid){
  		console.log('Form is not valid');
  	}else{
  		value.isActive = true;
  		value.registered = new Date();
  		value.hide = true;

  		this.dataService.addUser(value);
  		// this.users.unshift(value);

  		this.form.reset();
  	}
 
  }

}










