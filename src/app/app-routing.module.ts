import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlataformesComponent } from './plataformes/plataformes.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const retornarLogin = () => redirectUnauthorizedTo(['']);


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'plataformes', component: PlataformesComponent},
  {path: 'perfils', component: PerfilsComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: retornarLogin } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
