import { Component, OnInit } from '@angular/core';
import AdminMenu from '../../core/menu-models/adminMenu';
import Menu from '../../core/menu-models/Menu';
import { Router } from '@angular/router';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import adminMenu from "../../core/menu-models/adminMenu"
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  profilePictureUrl: string = '';
  menus!: Menu;
  connectedUserFullName: string = 'Joe';
  connectedUserRole: string = 'ADMIN';
  connectedUserId: string = '1';
  private notificationSubscription: any;
  unreadNotificationsCount = 0;
  //notif
  socketClient: any = null;
  private subscriptions: Subscription = new Subscription();

  notifications: any[] = [
    {message : "New user registered", date: "2025-03-07"},
    {message : "New Topic published", date: "2025-02-24"},
    {message : "New Login Detected", date: "2025-02-25"},
  ];

  constructor(private router: Router,
    private authenticationService:AuthenticationService
  ) {}



  ngOnInit(): void {
    this.loadProfilePicture();
      this.menus = adminMenu;
  }
  loadProfilePicture(): void {
    this.profilePictureUrl='/assets/images/users/avatar-1.jpg';

    }


    logout(){
      this.authenticationService.logOut();
      this.router.navigate(['/auth/signin']);
    }
}
