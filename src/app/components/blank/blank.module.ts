import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank.component';

import { BlankRouting } from './blank.routing';
import { PageHeaderModule } from '../../modules/index';



@NgModule({
  imports: [
    CommonModule,
    BlankRouting,
    PageHeaderModule
    

  ],
  declarations: [
    BlankComponent,

  ]
})
export class blankModule { }
