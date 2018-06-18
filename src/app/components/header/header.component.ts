import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openClose: string = 'open';
  search:string;
  constructor() { }

  ngOnInit() {
    
  }

  toggleSidebar(): void {
    this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    console.log("dsadasd"+this.openClose);

  }
 

}
