import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ColorcabelloComponent } from './colorcabello/colorcabello.component';
import { ColorojosComponent } from './colorojos/colorojos.component';
import { ColorpielComponent } from './colorpiel/colorpiel.component';
import { TallaComponent } from './talla/talla.component';
import { AlturaComponent } from './altura/altura.component';
import { MatDialog } from '@angular/material/dialog';
import { PesoComponent } from './peso/peso.component';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    ColorcabelloComponent,
    ColorojosComponent,
    ColorpielComponent,
    TallaComponent,
    AlturaComponent,
    PesoComponent,

  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  public readonly dialog=inject(MatDialog)
  abrirpiel(){
    this.dialog.open(ColorcabelloComponent, {
      width: '58%',
      height: '63%',
    });
  }

}
