import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { HttpService } from './../http.service';
import * as localforage from 'localforage';
import { User } from './../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;

  constructor(
    private http: HttpService,
    private fb: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      password: [ '', [Validators.required, Validators.minLength(8)] ],
      email: [ '', [Validators.required, Validators.minLength(7)]]
    });
  }

  login(){
    // console.log(this.form.value);
    let formData = new FormData();
    formData.append('email', this.form.value.email);
    formData.append('password', this.form.value.password);
    this.http.loginUser(formData).subscribe(
      (data: User) => {
        console.log(data);
        localforage.setItem('user', data);
      },
      (err: HttpErrorResponse) => console.log(err)
    );
  }

}
