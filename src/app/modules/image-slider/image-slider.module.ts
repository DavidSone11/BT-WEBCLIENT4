import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ImageSliderComponent } from './image-slider.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ImageSliderComponent],
    exports: [ImageSliderComponent]
})
export class ImageSliderModule { }
