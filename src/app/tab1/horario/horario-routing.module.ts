import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioPage } from './horario.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioPage
  },  {
    path: 'modulo1',
    loadChildren: () => import('./modulo1/modulo1.module').then( m => m.Modulo1PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioPageRoutingModule {}
