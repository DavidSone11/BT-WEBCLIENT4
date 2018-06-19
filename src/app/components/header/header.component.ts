import { Component, OnInit } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  search: string;
  constructor(private leftSidebarComponent: LeftSidebarComponent) { }

  ngOnInit() {

  }

  openCloseSidebar(): void {
  this.leftSidebarComponent.toggleSidebar();

  }


}
