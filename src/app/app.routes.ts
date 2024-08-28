import { Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { TiendaComponent } from './Paginas/tienda/tienda.component';
import { PagoComponent } from './Paginas/pago/pago.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
export const routes: Routes = [
    { path: 'prueba', component: PruebaComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'pago', component: PagoComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
];
