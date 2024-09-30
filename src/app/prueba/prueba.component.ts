import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import Highcharts3D from 'highcharts/highcharts-3d';
import * as Highcharts from 'highcharts';
Highcharts3D(Highcharts);
@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighchartsChartModule,
  ],
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  numeros: number[] = [];
  ingresarnumero: number = 0
  agregarNumero() {
   this.numeros.push(this.ingresarnumero)
   this.ingresarnumero = 0
  }
  nombres: string[] = [''];
  ingresarnombre: string = '';
  agregarNombre() {
    this.nombres.push(this.ingresarnombre);
    this.ingresarnombre = '';
   }

  Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 30,
          depth: 250,
          viewDistance: 5,
        },
      },
      title: {
        text: 'Gráfico de Barras ',
      },
      xAxis: {
        categories: ['Febrero', 'Abril', 'Junio'],
      },
      yAxis: {
        title: {
          text: 'Valores',
        },
      },
      series: [
        {
          type: 'column', // Especifica el tipo
          name: 'Serie 1',
          data: [5, 8, 4],
        },
        {
          type: 'column',
          name: 'Serie 2',
          data: [2, 2, 3],
        },
        {
          type: 'column',
          name: 'Serie 3',
          data: [3, 4, 4],
        },
      ] as Highcharts.SeriesOptionsType[], // Asegúrate de hacer el cast aquí
    }
  };


