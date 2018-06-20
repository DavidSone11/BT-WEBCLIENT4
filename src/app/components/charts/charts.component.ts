import { Component, OnInit } from '@angular/core';
import { slideToTopTransition } from '../../router.animations';

@Component({
  selector: 'app-chart',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  animations: [slideToTopTransition()]
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   

}
