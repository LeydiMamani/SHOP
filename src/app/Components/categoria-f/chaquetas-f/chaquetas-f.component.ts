import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chaquetas-f',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './chaquetas-f.component.html',
  styleUrl: './chaquetas-f.component.css'
})
export class ChaquetasFComponent {

}
