import { Component, HostBinding} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  @HostBinding("atr.class")

  vote:number;
  
  

  constructor() { }


show(ip:HTMLInputElement){
  console.log(`entered text: ${ip.value}`);
  console.log("entered text: "+ ip.value);
  

  
}

}
