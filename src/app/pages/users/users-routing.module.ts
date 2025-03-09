import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SidebarComponent} from '../../layout/sidebar/sidebar.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent,
    children: [
      {path: '', component: UserListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
