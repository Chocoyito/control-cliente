import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment'
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { ClienteService } from './services/cliente.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guardians/auth.guard';
import { ConfiguracionService } from './services/configuracion.service';
import { ConfiguracionGuard } from './guardians/configuracion.guard';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'control-clientes'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClienteService, LoginService, AuthGuard, ConfiguracionService, ConfiguracionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
