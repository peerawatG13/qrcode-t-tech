import { ListComponent } from './list.component';
import { ListModule } from './list.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  data: {
    title: 'List'
  },
  children:[
    {
      path:'',
      redirectTo:'list'
    },
    {
      path:'list',
      component: ListComponent,
      data:
      {
        title : 'list'
      }
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
