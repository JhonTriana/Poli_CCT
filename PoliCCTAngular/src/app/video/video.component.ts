/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
*/




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

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