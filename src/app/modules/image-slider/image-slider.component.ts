import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ImageSliderComponent implements OnInit {

  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor(config: NgbCarouselConfig, ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    this.sliders.push(
      {
        imagePath: 'assets/images/slider1.jpg',

      },
      {
        imagePath: 'assets/images/slider2.jpg',

      },
      {
        imagePath: 'assets/images/slider3.jpg',

      },
      {
        imagePath: 'assets/images/adventure-air-aircraft-36487.jpg',

      }
    );
  }

  ngOnInit() {
  }

}
