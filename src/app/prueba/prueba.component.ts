import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
   numeros: number[] = [];
   ingresarnumero: number = 0

   agregarNumero() {
    this.numeros.push(this.ingresarnumero)
    this.ingresarnumero = 0
   }

   nombres: string[] = [''];
   ingresarnombre: string = '';

   agregarNombre() {
      this.nombres.push(this.ingresarnombre);
      this.ingresarnombre = '';
    }
}

