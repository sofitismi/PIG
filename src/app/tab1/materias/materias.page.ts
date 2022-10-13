import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MateriasPage implements OnInit {

  public materias=[{titulo:"Marketing y la estrategia comercial",color:"bmateria1"},{titulo:"Matemática estrategica",color:"bmateria2"},{titulo:"Microeconomía y macroeconomía",color:"bmateria3"},
  {titulo:"Programación para marketers",color:"bmateria4"},{titulo:"Mercado y producto",color:"bmateria5"},{titulo:"Creatividad y estrategia de contenidos",color:"bmateria6"},{titulo:"Medios",color:"bmateria7"},{titulo:"Presentación efectiva",color:"bmateria8"},{titulo:"Trabajo in company",color:"bmateria9"},{titulo:"Business English",color:"bmateria10"}]
  public materias2=[]
  constructor() { }

  ngOnInit() {this.materias2=this.materias;
  }
  buscador ($event){
    const val = $event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.materias2 = this.materias.filter((item) => {
            return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
      this.materias2=this.materias;
    }
  }


}
