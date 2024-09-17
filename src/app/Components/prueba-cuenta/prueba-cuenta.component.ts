import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prueba-cuenta',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './prueba-cuenta.component.html',
  styleUrl: './prueba-cuenta.component.css'
})
export class PruebaCuentaComponent {

}
