import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { last } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  selectedUser: User | null = null;
  documents: { type: string, url: string }[] = [];

  users: any;
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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe(
      data => { this.users = data },
      error => {console.log(error)}
    );

  }

}
