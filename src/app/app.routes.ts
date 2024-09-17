import { Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { TiendaComponent } from './Paginas/tienda/tienda.component';
import { PagoComponent } from './Paginas/pago/pago.component';
import { CuentaComponent } from './Paginas/cuenta/cuenta.component';
import { EjemploComponent } from './Components/ejemplo/ejemplo.component';
import { FemeninoComponent } from './Paginas/femenino/femenino.component';
import { MasculinoComponent } from './Paginas/masculino/masculino.component';
import { BellezaComponent } from './Paginas/belleza/belleza.component';
export const routes: Routes = [
    { path: 'prueba', component: PruebaComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'pago', component: PagoComponent },
    { path: 'cuenta', component: CuentaComponent },
    { path: 'ejemplo', component: EjemploComponent },
    { path: 'femenino', component: FemeninoComponent },
    { path: 'masculino', component: MasculinoComponent },
    { path: 'belleza', component: BellezaComponent },
];
