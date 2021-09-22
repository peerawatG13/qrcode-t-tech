import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { InsertuserComponent } from './insertuser.component';

const routes: Routes = [
  {
    path: '',
    // component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path:'',
        component: DashboardComponent,
        data: {
          title: 'หน้าหลัก'
        }
      },
      {
        path:'insertuser',
        component: InsertuserComponent,
        data: {
          title:'InsertUser'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
