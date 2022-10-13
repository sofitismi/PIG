import { Component, OnInit, ViewEncapsulation } from '@angular/core'; 

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalificacionesPage implements OnInit {
first=true;second=false;third=false
  constructor() { }

  ngOnInit() {
  }
abrirfirst(){
  this.first=!this.first;
  this.second=false;
  this.third=false;
}
abrirsecond(){
  this.second=!this.second;
  this.first=false;
  this.third=false;
}
abrirthird(){
  this.third=!this.third;
  this.second=false;
  this.first=false;
}
}
