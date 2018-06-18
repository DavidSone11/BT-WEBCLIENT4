import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftSidebarComponent } from './left-sidebar.component';
import { LeftSidebarRouting } from './left-sidebar.routing';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    LeftSidebarRouting,

  ],
  declarations: [
    LeftSidebarComponent,
    HeaderComponent
  ]
})
export class LeftSidebarModule { }
