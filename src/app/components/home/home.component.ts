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
  urlpart:string;
  constructor(private _router: Router,private activeRoute:ActivatedRoute ) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();
    // console.log(this.urlpart);

  }
  ngOnInit() {

  }


}
