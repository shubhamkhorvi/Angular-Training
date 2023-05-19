import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  signupform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mob_number: new FormControl('')
  });

  signup():void{
    console.log(this.signupform.value);
  }
}
