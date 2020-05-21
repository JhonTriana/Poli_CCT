import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})  
export class VideoComponent implements OnInit {

  checked = false;
  disabled = true ;
  milisegundos = 15000;

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
 
}
  
setTimeout(ActivarBoton, 15000 );
function ActivarBoton(){
  this.disabled = false ;
}