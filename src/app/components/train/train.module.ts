import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainsComponent } from './train.component';
import { TrainsRouting } from './train.routing';

@NgModule({
  imports: [
    CommonModule,
    TrainsRouting,
    
  ],
  declarations: [
    TrainsComponent,
  ]
})
export class TrainModule {

}
