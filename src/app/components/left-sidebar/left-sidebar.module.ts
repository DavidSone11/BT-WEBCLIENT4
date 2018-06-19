import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftSidebarComponent } from './left-sidebar.component';
import { LeftSidebarRouting } from './left-sidebar.routing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LeftSidebarRouting,
    

  ],
  declarations: [
    LeftSidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LeftSidebarModule { }
