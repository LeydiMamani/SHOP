
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

import { EditarComponent } from '../../Components/editar/editar.component';
import { CarritoService } from '../../Services/carrito.service';
import { ResumenComponent } from '../../Components/resumen/resumen.component';
import { ConfiguracionComponent } from '../../Components/configuracion/configuracion.component';
import { HistorialComponent } from '../../Components/historial/historial.component';
import { PerfilComponent } from '../../Components/perfil/perfil.component';
import { MarcaComponent } from '../../Components/marca/marca.component';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarComponent,
    ResumenComponent,
    ConfiguracionComponent,
    HistorialComponent,
    PerfilComponent,
    MarcaComponent,
  ],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {

  public readonly dialog=inject(MatDialog)

  public readonly carritoService = inject(CarritoService)

  nombrePagina: string = 'pagina';
  cambiarPagina(pagina: string) {
    this.nombrePagina = pagina;
  }
}
