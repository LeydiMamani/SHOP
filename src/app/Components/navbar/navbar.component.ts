import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Producto } from '../../Models/Producto';
import { CarritoService } from '../../Services/carrito.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  CarritoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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
