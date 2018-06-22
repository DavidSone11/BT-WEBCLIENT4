import { Component, OnInit } from '@angular/core';
import { slideToTopTransition } from '../../animations/router.animations';
import {Router,ActivatedRoute} from '@angular/router'
import "../../prototypes/format.prototype"
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideToTopTransition()
  ]

})
export class HomeComponent implements OnInit {

  router:any;
  urlpart:string;
  public alerts: Array<any> = [];
  isLoad:boolean = false;
  constructor(private _router: Router,private activeRoute:ActivatedRoute ) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();

    this.alerts.push(
      {
          id: 1,
          type: 'success',
          message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates est animi quibusdam praesentium quam, et perspiciatis,
          consectetur velit culpa molestias dignissimos
          voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      },
      {
          id: 2,
          type: 'warning',
          message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates est animi quibusdam praesentium quam, et perspiciatis,
          consectetur velit culpa molestias dignissimos
          voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      }
  );

  }
  ngOnInit() {

  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}

public check(){
  console.log("adas");
  this.isLoad = !this.isLoad;
}

}
