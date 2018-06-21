import { Component, OnInit, Input,ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

@Component({
    selector: 'app-bread-crumb',
    templateUrl: './breadCrumb.component.html',
    styleUrls: ['./breadCrumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    @Input() nSize: string;
    @Input() urlPart: string[];
    
    constructor() {
        
     }
     ngAfterViewInit() {
        console.log(this.urlPart);
      }

    ngOnInit() { }
}
