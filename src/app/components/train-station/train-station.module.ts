import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainStationComponent } from './train-station.component';
import { TrainStationRouting } from './train-station.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    TrainStationRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    TrainStationComponent,
  ]
})
export class trainStationModule {

}
