import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank.component';

import { BlankComponentRouting } from './blank.component.routing';


@NgModule({
  imports: [
    CommonModule,
    BlankComponentRouting
  ],
  declarations: [
    BlankComponent,
  ]
})
export class blankComponentModule { }
