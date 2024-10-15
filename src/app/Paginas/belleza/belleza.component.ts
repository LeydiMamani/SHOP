import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CarritoComponent } from '../../Components/carrito/carrito.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CarritoService } from '../../Services/carrito.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-belleza',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    CarritoComponent,
    RouterLink,
    NavbarComponent,
    MatCardModule,
  ],
  templateUrl: './belleza.component.html',
  styleUrl: './belleza.component.css'
})
export class BellezaComponent {

  public readonly dialog=inject(MatDialog)

  public readonly carritoService = inject(CarritoService)

  nombrePagina: string = 'pagina';
  cambiarPagina(pagina: string) {
    this.nombrePagina = pagina;
  }

}
