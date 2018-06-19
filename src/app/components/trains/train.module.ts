import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainsComponent } from './trains.component';
import { TrainsRouting } from './train.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    TrainsRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    TrainsComponent,
  ]
})
export class trainsModule {

}
