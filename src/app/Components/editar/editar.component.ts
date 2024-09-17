import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ColorcabelloComponent } from './colorcabello/colorcabello.component';
import { ColorojosComponent } from './colorojos/colorojos.component';
import { ColorpielComponent } from './colorpiel/colorpiel.component';
import { TallaComponent } from './talla/talla.component';
import { AlturaComponent } from './altura/altura.component';

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
    AlturaComponent

  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

}
