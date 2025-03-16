import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlSignUp = environment.apiUrl+'api/auth/signup';

  constructor(private Http: HttpClient) { }

  createUser(user: any) {
    return this.Http.post(this.urlSignUp, user);
  }

  getAllUsers() {
    return this.Http.get(environment.apiUrl+"users/");
  }
}