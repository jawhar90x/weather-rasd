import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;

  constructor(private fb: FormBuilder) {
    let formLogin = {
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    }
    this.myform = this.fb.group(formLogin)
  }


  ngOnInit(): void {
  }

  get password() { return this.myform.get('password') }

  saveUser() {
    console.log(this.myform.value())

  }

}
