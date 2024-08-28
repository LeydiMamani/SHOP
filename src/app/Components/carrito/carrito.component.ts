import { CommonModule } from '@angular/common';
import { CarritoService } from './../../Services/carrito.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../Models/Producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

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
