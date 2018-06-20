import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank.component';

import { BlankRouting } from './blank.routing';
import { StatesDirective } from '../../directives/states.directive';


@NgModule({
  imports: [
    CommonModule,
    BlankRouting
    
  ],
  declarations: [
    BlankComponent,
    StatesDirective
  ]
})
export class blankModule { }
