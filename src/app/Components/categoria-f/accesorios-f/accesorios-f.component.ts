import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../Services/carrito.service';
import { Producto } from '../../../Models/Producto';

@Component({
  selector: 'app-accesorios-f',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './accesorios-f.component.html',
  styleUrl: './accesorios-f.component.css'
})
export class AccesoriosFComponent {
  public readonly carritoService = inject(CarritoService)
  productos: Producto[] = [
    { id: '001',image: 'https://www.falabella.com.pe/cdn-cgi/imagedelivery/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20558481_2/width=240,height=240,quality=70,format=webp,fit=pad', nombre:'Lente De Sol - Dolce Gabbana',talla:'', precio: 43},
    { id: '002',image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883211975_1/w=1500,h=1500,fit=pad', nombre: 'Tote Benetton',talla:'', precio: 125},
    { id: '003',image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/132273609_02/w=1500,h=1500,fit=pad', nombre: 'Anillo de acero inoxidable - regulable',talla:'',precio: 47},
    { id: '004',image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/129090017_02/w=1500,h=1500,fit=pad', nombre: 'Collar mujer trébol convertible corazón abierto acero plateado',talla:'',precio: 98},
    { id: '005',image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/119468486_01/w=1500,h=1500,fit=pad', nombre: 'Collar en Oro 18k Laminado y Plata Luna y estrella Nácar Lavalle Joyería',talla:'',precio: 69},
    { id: '006',image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/127858729_01/w=1500,h=1500,fit=pad', nombre: 'Pulsera en Oro 18k Laminado en Plata 950 Flor Nacar Lavalle Joyería',talla:'',precio: 30},
  ]
  subtotal: number = 0;

  agregar(producto: Producto) {
    this.carritoService.listacarrito.push(producto)
    // this.listacarrito.push(producto)
    // this.actualizarSubtotal();
  }
}
