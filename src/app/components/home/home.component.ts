import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
