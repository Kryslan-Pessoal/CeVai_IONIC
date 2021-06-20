import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'entrar-com-usuario-e-senha',
    loadChildren: () => import('./paginas/entrar-com-usuario-e-senha/entrar-com-usuario-e-senha.module').then( m => m.EntrarComUsuarioESenhaPageModule)
  },
  {
    path: 'esqueceu-a-senha',
    loadChildren: () => import('./paginas/esqueceu-a-senha/esqueceu-a-senha.module').then( m => m.EsqueceuASenhaPageModule)
  },
  {
    path: 'itinerarios',
    loadChildren: () => import('./paginas/itinerarios/itinerarios.module').then( m => m.ItinerariosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
