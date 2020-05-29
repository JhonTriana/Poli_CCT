import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restore-pswd',
  templateUrl: './restore-pswd.component.html',
  styleUrls: ['./restore-pswd.component.scss']
})
export class RestorePswdComponent implements OnInit {

  constructor(private router: Router) { }

documento: string;

  ngOnInit(): void {
  }

  vrestore() : void {
    if(this.documento == '123456' ){

    alert("Se envio un correo electronico");
     }else {
       
      alert("Documento no registrado");
    }

    
  }
  login() : void {
    {
     this.router.navigate(["login"]);
    }
  }

}


