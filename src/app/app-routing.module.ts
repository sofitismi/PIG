import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },{
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./tab1/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./tab1/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./tab1/horario/horario.module').then( m => m.HorarioPageModule)
  }

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
