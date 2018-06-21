import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './image-slider.component';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
    ],
    declarations: [ImageSliderComponent],
    exports: [ImageSliderComponent]
})
export class ImageSliderModule { }
