import { Component, OnInit } from '@angular/core';
import { slideToTopTransition } from '../../router.animations';
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
  constructor(private _router: Router,private activeRoute:ActivatedRoute ) {
    this.router = _router;
    // console.log(this.router.url);
    // console.log(activeRoute);
    // console.log("santosh".truncate());
    
    console.log(this.router.url.checkRoute())
  }
  ngOnInit() {

  }


}
