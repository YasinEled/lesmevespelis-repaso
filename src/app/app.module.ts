import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MenusuperiorComponent } from './menusuperior/menusuperior.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { PlataformesComponent } from './plataformes/plataformes.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenusuperiorComponent,
    PlataformesComponent,
    PerfilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireAuthGuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
