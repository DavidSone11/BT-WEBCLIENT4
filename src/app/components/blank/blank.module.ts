import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank.component';

import { BlankRouting } from './blank.routing';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    BlankRouting,
    ChartsModule

  ],
  declarations: [
    BlankComponent,

  ]
})
export class blankModule { }
