import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { StatModule } from '../../modules/stat/stat.module';
import { PageHeaderModule } from '../../modules/page-header/page-header.module';
import { BreadCrumbModule } from '../../modules/bread-crumb/breadCrumb.module';
@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    StatModule,
    PageHeaderModule,
    BreadCrumbModule
  ],
  declarations: [
    HomeComponent,
    
  ]
})
export class HomeModule {

}
