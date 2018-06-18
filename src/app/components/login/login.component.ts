import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  enable: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
  }

  login() {

    console.log("dasd");
    localStorage.setItem("username", "santosh");
    localStorage.setItem("role", "admin");
    localStorage.setItem("token", "CpzUMHyMPPtmp8gW8EhTxlzuQA3o8ahx");
    this.router.navigate(['/dashboard']);
  }


}
