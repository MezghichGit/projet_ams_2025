import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { last } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  selectedUser: User | null = null;
  documents: { type: string, url: string }[] = [];

  users: User[] = [];
  roles: string[] = ["ADMIN", "MANAGER", "EMPLOYEE"];
  statuses: string[] = ['Verified', 'Unverified'];

  page: number = 0;
  size: number = 10;
  totalPages: number = 0;
  totalUsers: number = 0;

  searchTerm: string = '';
  selectedRole: string = '';
  selectedStatus: string = '';

  constructor(
              private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.users=[
      {
        id: 1,
        cin: '10000000',
        email:'test1@gmail.com',
        firstname:'Ahmed',
        lastname:'Ben Ahmed',
        phoneNumber: 90471258,
        companyName: 'Company 1',
        status: 'Verified',
        role:"ADMIN",
        password:""
      },
      {
        id: 2,
        cin: '10000001',
        email:'test2@gmail.com',
        firstname:'Ameni',
        lastname:'Werteni',
        phoneNumber: 29478541,
        companyName: 'Company 1',
        status: 'Verified',
        role:"MANAGER",
        password:""
      },{
        id: 3,
        cin: '10000002',
        email:'test1@gmail.com',
        firstname:'Ahmed',
        lastname:'Ben Ahmed',
        phoneNumber: 57321469,
        companyName: 'Company 1',
        status: 'Verified',
        role:"EMPLOYEE",
        password:""
      }
    ]
  }

}
