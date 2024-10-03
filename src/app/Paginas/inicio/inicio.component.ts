import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    RouterLinkActive,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
