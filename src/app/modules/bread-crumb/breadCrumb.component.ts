import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-bread-crumb',
    templateUrl: './breadCrumb.component.html',
    styleUrls: ['./breadCrumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    @Input() nSize: string;
    constructor() { }

    ngOnInit() { }
}
