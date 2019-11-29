import { FormControl, Validators } from '@angular/forms';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.css']
})
export class NewAdmissionComponent {
 bike = false;

 name = new FormControl('', Validators.required);
 fees = new FormControl('', Validators.required);
 bikeNumber = new FormControl('', Validators.required);
 mobile = new FormControl('', Validators.required);

  haveBike(status: number) {
    if (status === 1  ) {
    this.bike = true;
    } else {
    this.bike = false;
    }


  }
}
