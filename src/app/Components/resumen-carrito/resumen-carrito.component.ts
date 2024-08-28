import { Component, inject } from '@angular/core';
import { CarritoService } from '../../Services/carrito.service';
import { Producto } from '../../Models/Producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resumen-carrito',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './resumen-carrito.component.html',
  styleUrl: './resumen-carrito.component.css'
})
export class ResumenCarritoComponent {

  public readonly carritoService = inject(CarritoService)

  subtotal: number = 0;
  actualizarSubtotal() {
    this.subtotal = this.carritoService.listacarrito.reduce((total, producto) => total + producto.precio, 0);
  }

  getSubtotal(): number {
    return this.subtotal;
  }

  eliminar(producto: Producto) {
    this.carritoService.listacarrito = this.carritoService.listacarrito.filter(p => p.id !== producto.id);
    this.actualizarSubtotal();
  }

}
