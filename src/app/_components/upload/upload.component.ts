import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import "../../_prototypes/format.prototype"

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  commentsList: object;
  isloading: boolean = false;

  router:any;
  urlpart:string;
  constructor(private _router: Router,private activeRoute:ActivatedRoute,private http: HttpClient ) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();


  }

  ngOnInit() {
  }
  

  

}
