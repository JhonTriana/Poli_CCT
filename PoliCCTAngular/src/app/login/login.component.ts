



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  
  username: string;
  password: string;

  ngOnInit(): void {
  }
  
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["actividad"]);
    }else {
      alert("Invalid credentials");
    }
  }
}

