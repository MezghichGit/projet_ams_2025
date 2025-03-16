import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationRequest} from '../../../core/models/authentication-request';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signInForm!: FormGroup;
  showPassword = false;


  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];
  successMsg: string = '';


  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService:AuthenticationService
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['successMsg']) {
        this.successMsg = params['successMsg'];
      }
    });
    this.initSignInForm();
  }

  initSignInForm(){
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });

  }
  signIn() {
    this.errorMsg = [];
    this.authRequest=this.signInForm.value;
    //signin method call from service here
    this.router.navigate(["/users"]);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  getRouteByRole(): string {
  
    return '/users';
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.authenticationService.authenticate(this.signInForm.value.username, this.signInForm.value.password).subscribe(
        (data:any) => {
          this.router.navigate(['/dashboard'])
          
        },
        (error:any) => {
          this.router.navigate(['/auth/signin'])
          console.log(error)
        }
      );
      //console.log(this.signInForm.value)
      //this.signIn();
  }
  }



  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  get rememberMe() {
    return this.signInForm.get('rememberMe');
  }



}
