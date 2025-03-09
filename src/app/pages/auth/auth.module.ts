import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent  ],
  imports: [
    CommonModule,
    AuthRoutingModule ,
    NgxCountriesDropdownModule,
    ReactiveFormsModule,



  ],
  exports: [
    SigninComponent,
    SignupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AuthModule { }
