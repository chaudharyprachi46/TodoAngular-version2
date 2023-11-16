import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  signupUsers: any[] = [];
  
  signupObj:any = {
    userName: '',
    email:'',
    password:''
  };

  loginObj:any = {
    userName: '',
    password:''
  };

  // constructor(private authService: AuthService){

  // }

  ngOnInit(): void {
    const localData = localStorage.getItem('userName');
    if(localData!=null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignup(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('userName', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email:'',
      password:''
    }
    console.log(this.signupObj);
  }

 

  onLogin(){
    debugger;
    console.log(this.loginObj);
    console.log(this.signupUsers);
    const isUserExists = this.signupUsers.find(m => 
      m.email === this.loginObj.email && m.password === this.loginObj.password);
      console.log(isUserExists);
    if(isUserExists){
      alert('User Login Successfully')
    }
    else{
      alert('User Login Failed! Wrong Credentials')
    }
  }
  
}
