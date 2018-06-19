import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  animations: [
    trigger('sideMenuAnim', [
      state('open', style({ marginLeft: '0px' })),
      state('close', style({ marginLeft: '-200px' })),
    ])
  ]
})
export class LeftSidebarComponent implements OnInit {

  openClose:string = 'open';
  constructor() { }

  ngOnInit() {
  }
   toggleSidebar():void {

    this.openClose = (this.openClose==='open') ? 'close':'open';

   }

}
