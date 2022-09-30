import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalificacionesPage implements OnInit {
first=true;second=false;
  constructor() { }

  ngOnInit() {
  }
abrirfirst(){
  this.first=!this.first;
}
abrirsecond(){
  this.second=!this.second;
}
}
