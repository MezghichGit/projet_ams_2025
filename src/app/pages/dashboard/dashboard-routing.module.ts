import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from '../../layout/sidebar/sidebar.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
const routes: Routes = [
  {path:'',component:SidebarComponent,children:[
      {
        path:'admin',component:AdminDashboardComponent
      }

    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
