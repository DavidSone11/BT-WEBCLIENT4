import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('mainContainerAnim', [
      state('open', style({ marginLeft: '0px' })),
      state('close', style({ marginLeft: '-100px' })),
    ])
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
