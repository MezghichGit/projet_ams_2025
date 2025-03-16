import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: any, password: any) {


    let userData:any = this.httpClient.post(environment.apiUrl+'api/auth/signin',
    {"username":username,"password":password}).pipe(
      map(
        (data:any) => {
          sessionStorage.setItem('token', data.accessToken);
          sessionStorage.setItem('email', data.email);
          sessionStorage.setItem('username', data.username);
          sessionStorage.setItem('role', data.roles[0]);
           userData = data;

        }
      )
    );
    return userData;
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
  }
}