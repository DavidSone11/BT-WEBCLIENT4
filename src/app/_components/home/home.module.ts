import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { StatModule } from '../../modules/stat/stat.module';
import { PageHeaderModule } from '../../modules/page-header/page-header.module';
import { BreadCrumbModule } from '../../modules/bread-crumb/breadCrumb.module';
import { ImageSliderModule } from '../../modules/image-slider/image-slider.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaddaModule } from 'angular2-ladda';
@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    StatModule,
    PageHeaderModule,
    BreadCrumbModule,
    ImageSliderModule,
    NgbModule.forRoot(),
    LaddaModule.forRoot({
      style: "contract",
      spinnerSize: 40,
      spinnerColor: "red",
      spinnerLines: 12
  })
  ],
  declarations: [
    HomeComponent,
    
  ]
})
export class HomeModule {

}
