import { CarritoService } from './../../Services/carrito.service';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CarritoComponent } from '../../Components/carrito/carrito.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ResumenCarritoComponent } from '../../Components/resumen-carrito/resumen-carrito.component';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule,NavbarComponent, CarritoComponent, RouterLink, ResumenCarritoComponent],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {

  public readonly carritoService = inject(CarritoService)

  correo: string = "";
  nombre: string = "";
  apellidos: string = "";
  dni: string = "";
  direccion: string = "";
  ciudad: string = "";
  referencia: string = "";
  region: string = "";
  codigo: string = "";
  telefono: string = "";

  imprimir(){
    console.log(
      this.correo + ", " +
      this.nombre + ", " +
      this.apellidos + ", " +
      this.dni + ", " +
      this.direccion + ", " +
      this.ciudad + ", " +
      this.referencia + ", " +
      this.region + ", " +
      this.codigo + ", " +
      this.telefono
  );
  }

}
