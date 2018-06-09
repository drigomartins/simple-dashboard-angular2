import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConfigComponent } from './configuracoes/config.component';

const appRoutes: Routes  = [
  { path: '', component: PrincipalComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'configuracoes', component: ConfigComponent},
  { path: '**', component: PrincipalComponent}
];

export const routing = RouterModule.forRoot(appRoutes);