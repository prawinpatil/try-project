import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = new FormControl('', Validators.required);
  pwd = new FormControl('', Validators.required);


  user = 'prawinpatil';
  passward = '12345';

 

  onClick() {
    console.log(this.pwd +" "+ this.username);
    
    let ser = new LoginService;
    //ser.getObj(this.username,this.pwd);
    ser.verifiyLogin();

  }

  }
