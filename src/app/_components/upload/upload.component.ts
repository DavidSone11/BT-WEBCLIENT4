import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import "../../_prototypes/format.prototype"
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  commentsList: object;
  isloading: boolean = false;
  arrayBuffer: any;
  file: File;

  router: any;
  urlpart: string;
  constructor(private _router: Router, private activeRoute: ActivatedRoute, private http: HttpClient) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();


  }

  ngOnInit() {
  }



  incomingfile(event) {
    this.file = event.target.files[0];
    this.getUrl(event);
  }

  getUrl(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
      
      
    }
}



}
