import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './components/tablero/tablero.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { AuthGuard } from './guardians/auth.guard';
import { ConfiguracionGuard } from './guardians/configuracion.guard';

const routes: Routes = [
  { path: '', component: TableroComponent, canActivate: [AuthGuard]}, // Ruta predeterminaa
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistroComponent, canActivate: [ConfiguracionGuard] },
  { path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard] },
  { path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard] },
  { path: '**', component: NoEncontradoComponent },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
