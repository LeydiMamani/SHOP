import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CarritoComponent } from '../../Components/carrito/carrito.component';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CarritoService } from '../../Services/carrito.service';
import { PantalonesFComponent } from '../../Components/categoria-f/pantalones-f/pantalones-f.component';
import { AccesoriosFComponent } from '../../Components/categoria-f/accesorios-f/accesorios-f.component';
import { CamisetasFComponent } from "../../Components/categoria-f/camisetas-f/camisetas-f.component";
import { ChaquetasFComponent } from "../../Components/categoria-f/chaquetas-f/chaquetas-f.component";
import { GeneralFComponent } from "../../Components/categoria-f/general-f/general-f.component";

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
    PantalonesFComponent,
    AccesoriosFComponent,
    CamisetasFComponent,
    ChaquetasFComponent,
    GeneralFComponent
],
  templateUrl: './femenino.component.html',
  styleUrl: './femenino.component.css'
})
export class FemeninoComponent {
  public readonly dialog=inject(MatDialog)

  public readonly carritoService = inject(CarritoService)

  nombrePagina: string = 'pagina';
  cambiarPagina(pagina: string) {
    this.nombrePagina = pagina;
  }

}
