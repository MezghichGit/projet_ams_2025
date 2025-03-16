import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConfig } from 'ngx-countries-dropdown';
import {RegistrationRequest} from '../../../core/models/registration-request';
import {Router} from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;
  selectedCountry: string | null = null;
  showPassword = false;
  title = "AMS";

  registerRequest: RegistrationRequest = {role:'', email: '', username: '', firstname: '', lastname: '', password: '', companyName: '', phoneNumber1: 0, country: ''};
  errorMsg: Array<string> = [];
  successMsg: string = '';


  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService
              ) {}

  ngOnInit() {
    this.initSignUpForm();
  }
  initSignUpForm() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      countryCode: ['+216', Validators.required],
      companyName: ['', Validators.required],
      phoneNumber1: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['User', Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
    });

    this.title = `Créer ${this.registrationForm.get("role")?.value.toLowerCase()} Account`;
  }

  singIn(){
    this.router.navigate(['/auth/signin']);

  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onRoleChange(event: any) {
    this.registrationForm.get('role')?.setValue(event.target.value);
    this.title = `Create AMS ${this.registrationForm.get("role")?.value.toLowerCase()} Account`;
  }


  config: IConfig = {

  };

  onCountryChange(event: any) {

    this.registrationForm.get('country')?.setValue(event.name);
    this.registrationForm.get('countryCode')?.setValue(event.dialling_code),
    this.selectedCountry=event.dialling_code

  }


  signUp() {
    this.errorMsg = [];
    this.successMsg = '';
    this.registerRequest=this.registrationForm.value;
    this.registerRequest.phoneNumber1=this.registrationForm.get('countryCode')?.value+this.registrationForm.get('phoneNumber1')?.value;
    this.registerRequest.country=this.registerRequest.country.split(' ')[0];

//signup method call from service here
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      //console.log(this.registrationForm.value);
      this.signUp();

      let user={
        firstName :  this.registrationForm.get('firstname')?.value,
        lastName: this.registrationForm.get('lastname')?.value,
        username: this.registrationForm.get('username')?.value,
        email:this.registrationForm.get('email')?.value,
        country:this.registrationForm.get('country')?.value,
        companyName:this.registrationForm.get('companyName')?.value,
        phoneNumber:this.registrationForm.get('phoneNumber1')?.value,
        password:this.registrationForm.get('password')?.value,
        role: [this.registrationForm.get('role')?.value],
      }
      this.userService.createUser(user).subscribe(

        (response :any)=> {
          this. singIn();
        },
    
        error => {
          console.log(error)
        }
    
      );

    }
  }

}
