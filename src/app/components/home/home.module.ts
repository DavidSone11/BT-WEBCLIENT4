import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { StatModule } from '../../modules/stat/stat.module';
@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    StatModule
  ],
  declarations: [
    HomeComponent,
    
  ]
})
export class HomeModule {

}
