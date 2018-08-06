import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  email :FormControl    = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);
  hide  :boolean        = true;

  constructor() { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmt(form: any): void { 
    console.log(`Email: ${this.email.value} Pass: ${this.password.value}`);
  }

  isDisabled(): boolean {
    return this.email.value;
  }

  ngOnInit() {
  }

}
