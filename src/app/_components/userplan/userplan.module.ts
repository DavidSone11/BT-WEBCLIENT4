import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserplanComponent } from './userplan.component';
import { UserPlanRouting } from './userplan.routing';
import { PageHeaderModule } from '../../modules/index';
import { BreadCrumbModule } from '../../modules/bread-crumb/breadCrumb.module';


@NgModule({
  imports: [
    CommonModule,
    UserPlanRouting,
    PageHeaderModule,
    BreadCrumbModule
  ],
  declarations: [
    UserplanComponent

  ]
})
export class UserplanModule { }
