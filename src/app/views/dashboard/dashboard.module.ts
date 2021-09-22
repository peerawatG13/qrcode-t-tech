import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// ใช้หน้า
import { InsertuserComponent } from './insertuser.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';


@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    CommonModule,
    // Router,
    // ActivatedRoute,

  ],
  declarations: [ DashboardComponent,InsertuserComponent ]
})
export class DashboardModule { }
