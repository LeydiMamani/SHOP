import { Usuario } from './../../Models/Usuario';
import { Pedido } from './../../Models/Pedido';
import { CarritoService } from './../../Services/carrito.service';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CarritoComponent } from '../../Components/carrito/carrito.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ResumenCarritoComponent } from '../../Components/resumen-carrito/resumen-carrito.component';
import { LoginComponent } from '../../Components/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    CarritoComponent,
    RouterLink,
    ResumenCarritoComponent,
    LoginComponent,
  ],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {
  public readonly dialog=inject(MatDialog)

  public readonly carritoService = inject(CarritoService)
  pedido: Pedido = {} as Pedido
  correo: string = "";
  nombre: string = "";
  apellidos: string = "";
  dni: string = "";
  direccion: string = "";
  region: string = "";
  codigo: string = "";
  telefono: string = "";
  pais: string = "";
  departamento: string = "";
  provincia:string = "";
  distrito:string = "";
  direccionEntrega: string = "";
  codigoDescuento:string = "";

  imprimir(){
    this.pedido.correo=this.correo
    this.pedido.pais=this.pais
    this.pedido.departamento=this.departamento
    this.pedido.provincia=this.provincia
    this.pedido.distrito=this.distrito
    this.pedido.direccionEntrega=this.direccionEntrega
    this.pedido.codigoDescuento=this.codigoDescuento
    console.log(this.pedido)

  }

  abrirlogin(){
    this.dialog.open(LoginComponent, {
      width: '55%',
    });
  }
}
