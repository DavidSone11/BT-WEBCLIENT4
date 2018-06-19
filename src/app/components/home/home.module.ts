import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    HomeComponent,
  ]
})
export class DashboardModule {

}
