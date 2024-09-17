import { CarritoService } from './../../Services/carrito.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Type } from '@angular/compiler';
import { Producto } from '../../Models/Producto';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CarritoComponent } from '../../Components/carrito/carrito.component';
@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarComponent,
    CarritoComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

  public readonly carritoService = inject(CarritoService)
  productos: Producto[] = [
    { id: '001',image: 'https://oxus.com.pe/cdn/shop/files/OXEstrella01.jpg?v=1700324371&width=770', nombre:'Falda',talla:'S-M', precio: 100},
    { id: '002',image: 'https://oxus.com.pe/cdn/shop/files/OXMarianneB01.jpg?v=1719524540&width=770', nombre: 'Casaca Marianne',talla:'S-M', precio: 125},
    { id: '003',image: 'https://oxus.com.pe/cdn/shop/files/OXDakotaB01.jpg?v=1719530270&width=770', nombre: 'Casaca Dakota',talla:'S-M',precio: 150},
    { id: '004',image: 'https://oxus.com.pe/cdn/shop/files/OXSoho01.jpg?v=1701788177&width=3000', nombre: 'Vestido Soho',talla:'S-M',precio: 98},
    { id: '005',image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/130540369_01/w=1500,h=1500,fit=pad', nombre: 'Polera Algodón Oversize',talla:'S-M',precio: 69},
    { id: '006',image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883010307_1/w=1500,h=1500,fit=pad', nombre: 'Casaca Deportiva Fratta',talla:'S-M',precio: 130},
    { id: '007',image: 'https://oxus.com.pe/cdn/shop/products/OXBomberPaige001.jpg?v=1661721854&width=770" class="card-img-top', nombre: 'Bomer Paige',talla:'S-M',precio: 145},
    { id: '008',image: 'https://oxus.com.pe/cdn/shop/files/OXCareen07.jpg?v=1697667051&width=770', nombre: 'Falda Careen Denim',talla:'S-M',precio: 110},
    { id: '009',image: 'https://oxus.com.pe/cdn/shop/files/background-editor_output_dd06e041-5e1e-4802-9af5-147578b8fbc9.png?v=1721420224&width=970', nombre: 'Falda Aurora',talla:'S-M', precio: 100},
    { id: '010',image: 'https://oxus.com.pe/cdn/shop/products/OXBomberAmber001.jpg?v=1661718709&width=970', nombre: 'casaca Bomber Amber',talla:'S-M', precio: 125},
    { id: '011',image: 'https://oxus.com.pe/cdn/shop/products/OXDaya013.jpg?v=1698334398&width=970', nombre: 'Vestido Daya',talla:'S-M',precio: 150},
    { id: '012',image: 'https://oxus.com.pe/cdn/shop/products/OXDisco01.jpg?v=1663951533&width=970', nombre: 'Vestido Disco',talla:'S-M',precio: 98},
    { id: '013',image: 'https://oxus.com.pe/cdn/shop/files/OXLola01.jpg?v=1683410981&width=970', nombre: 'Jean LOLA',talla:'S-M',precio: 69},
    { id: '014',image: 'https://oxus.com.pe/cdn/shop/files/OXBlusaParis01.jpg?v=1719417798&width=970', nombre: 'Blusa Paris',talla:'S-M',precio: 130},
    { id: '015',image: 'https://oxus.com.pe/cdn/shop/files/OXTopAria01.jpg?v=1707568049&width=970', nombre: 'Top Aria',talla:'S-M',precio: 145},
    { id: '016',image: 'https://oxus.com.pe/cdn/shop/products/OXAstrid001.jpg?v=1697489215&width=770', nombre: 'Vestido Astrid',talla:'S-M',precio: 110}
  ]
  subtotal: number = 0;

  agregar(producto: Producto) {
    this.carritoService.listacarrito.push(producto)
    // this.listacarrito.push(producto)
    // this.actualizarSubtotal();
  }

}
