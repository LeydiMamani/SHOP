import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-altura',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
  templateUrl: './altura.component.html',
  styleUrl: './altura.component.css'
})
export class AlturaComponent {
  disabled = false;
  max = 250;
  min = 50;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 150;

  get alturaEnPies(): string {
    const pies = Math.floor(this.value / 30.48);
    const pulgadas = Math.round((this.value % 30.48) / 2.54);
    return `${pies} pies ${pulgadas} pulgadas`;
  }

}
