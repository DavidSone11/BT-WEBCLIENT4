import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'aw-member-list',
  template: `
     <h2>MEMBERS List components</h2>
     `
})
export class MemberListComponent implements OnInit {


  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
  }


}
