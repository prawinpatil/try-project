import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Try';
  toggleLogin:boolean=false;
  toggleForm:boolean=false;
  rules:string[]=[
    "FEES: 700rs per month(excluding wifi charges)",
    "DEPOSITE: 1000 Rs (refundable)+ 20 Rs",
    "TIMING: 7am to 11pm (no weekly holiday)",
    "No reserved place for anybody.",
    "Addmisssion only for Boys",
    "Wearing ID-card is complsary",
    "Parking only for bike/cycle between library time(7am to 11pm only).",
    ];
  
  Toggle(status:number){

    if(status==1){
      if(this.toggleForm)
      this.toggleForm=!this.toggleForm;

      this.toggleLogin=!this.toggleLogin;

    }
    else{
      if(this.toggleLogin)
      this.toggleLogin=!this.toggleLogin;

      this.toggleForm=!this.toggleForm;

    }


    
  }
    

  
}
