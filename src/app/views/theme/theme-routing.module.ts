import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TypographyComponent } from './typography.component';
import { BusinessPage } from './business.page';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      },
      {
        path: 'business',
        component: BusinessPage,
        data:{
          title: 'ผู้จัดการ'
        },

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
