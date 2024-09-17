import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CarritoComponent } from '../../Components/carrito/carrito.component';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-masculino',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    CarritoComponent,
    RouterLink,
    NavbarComponent,
  ],
  templateUrl: './masculino.component.html',
  styleUrl: './masculino.component.css'
})
export class MasculinoComponent {
  public readonly dialog=inject(MatDialog)
}
