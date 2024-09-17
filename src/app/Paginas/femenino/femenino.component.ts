import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CarritoComponent } from '../../Components/carrito/carrito.component';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-femenino',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    CarritoComponent,
    RouterLink,
    NavbarComponent,
  ],
  templateUrl: './femenino.component.html',
  styleUrl: './femenino.component.css'
})
export class FemeninoComponent {
  public readonly dialog=inject(MatDialog)


}
