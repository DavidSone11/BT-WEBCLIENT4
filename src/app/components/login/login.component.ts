import { Component, OnInit } from '@angular/core';
// import {BankAccount} from '../../classes/bank-account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[BankAccount]
})
export class LoginComponent implements OnInit {

  enable: boolean = false;
  // constructor(private bankAccount:BankAccount) { 
  constructor() {
    // bankAccount.displayDetails();
  }

  ngOnInit() {
  }

  login() {
    console.log("dasd");
  }


}
