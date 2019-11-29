import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
isBike:boolean=false;
  constructor() { }

  ngOnInit() {
  }
ToggleInput(status:number){
  if(status==1)
  this.isBike=true;

  else{
    this.isBike=false;
  }
}

}
