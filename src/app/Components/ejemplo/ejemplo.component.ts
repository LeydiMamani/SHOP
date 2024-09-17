import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent {

  nombrePagina: string = 'pagina';

  cambiarPagina(pagina: string) {
    this.nombrePagina = pagina;
    alert(this.nombrePagina);
  }

}
