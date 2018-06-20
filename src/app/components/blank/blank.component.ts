import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  animations: [routerTransition()]
})
export class BlankComponent implements OnInit {

  commentsList: object;
  isloading: boolean = false;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.isloading = true;

    setTimeout(() => {
      this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data => {
        this.commentsList = data;
        this.isloading = false;
      });
    }, 500);

  }
}
