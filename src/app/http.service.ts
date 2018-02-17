import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  loginUser(user: FormData){
    return this.http.post<User>('http://127.0.0.1:5000/login', user);
  }

}
