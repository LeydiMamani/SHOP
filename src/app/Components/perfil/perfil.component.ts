import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterLinkActive } from '@angular/router';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkActive,
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  public readonly dialog=inject(MatDialog)

  abrireditar(){
    this.dialog.open(EditarComponent, {
      width: '60%',
      height: '60%',
    });
  }

}
