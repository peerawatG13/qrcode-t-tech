// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { TypographyComponent } from './typography.component';
import { BusinessPage } from './business.page'

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    TypographyComponent,
    BusinessPage
  ]
})
export class ThemeModule { }
