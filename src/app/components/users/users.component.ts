import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
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
  data:any;

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.userService.getData().subscribe(data => {
  		console.log(data);
  	});
	
	//due to it being asynchronous
	this.userService.getUsers().subscribe(users =>{
		this.users = users;
		this.loaded = true;
	});	
 	
  }//end of ngInit()

  //Add new user button Temmplate Driven From
  onSubmit({value, valid}: {value: User, valid: boolean}){
  	if(!valid){
  		console.log('Form is not valid');
  	}else{
  		value.isActive = true;
  		value.registered = new Date();
  		value.hide = true;

  		this.userService.addUser(value);

  		this.form.reset();
  	}
 
  }

}










