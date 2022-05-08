import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  userData = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confpassword: new FormControl('', [Validators.required]),
    terms: new FormControl('', [Validators.required]),
  });

  displayVal: string = '';
  getVal(val: string) {
    console.warn(val);
    this.displayVal = val;
  }
}
