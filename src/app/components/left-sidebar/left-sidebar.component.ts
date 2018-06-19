import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  animations: [
    trigger('sideMenuAnim', [
      state('active', style(
        {
          marginLeft: '0px',
          transition: '0.8s all'
        },


      )),
      state('inactive', style({ 
        marginLeft: '-200px',
        transition:'0.8s all'  
      })),
      //transition('inactive => active', animate('2s all')),
      //transition('active => inactive', animate('2s all'))
    ]),
    trigger('contentAnimmation', [
      state('active', style(
        {
          margin: '0px',
          transition: '0.8s all'
        },


      )),
      state('inactive', style({ 
        margin: '-200px',
        transition:'0.8s all'  
      })),
      //transition('inactive => active', animate('2s all')),
      //transition('active => inactive', animate('2s all'))
    ])
  ]
})
export class LeftSidebarComponent implements OnInit {

  openClose: string = 'active';
  constructor() { }

  ngOnInit() {
  }
  toggleSidebar(): void {

    this.openClose = (this.openClose === 'active') ? 'inactive' : 'active';

  }

}
