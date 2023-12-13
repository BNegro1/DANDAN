import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tab2',
  template: '<div class="chart-container"><canvas id="myChart" width="400" height="400"></canvas></div>',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  ngOnInit() {
    this.createHeartChart();
  }

  createHeartChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const x = this.linspace(-2, 2, 80);

    // Ajusta el factor de escala para hacer el corazón más pequeño
    const scale = 0.2;

    const y1 = this.calculateHeartTop(x, scale);
    const yV = this.calculateVShape(x, scale);

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x,
        datasets: [
          {
            label: '',
            data: y1,
            fill: false,
            borderColor: 'red',
            tension: 3, // Tensión del corazón ("Garabatos" del costado)
          },
          {
            label: '',
            data: yV,
            fill: false,
            borderColor: 'red',
            tension: 8,  // Tensión del corazón ("Garabatos" del costado)
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false, // Ocultar la leyenda
          },
          title: {
            display: true,
            text: '4 u DANDAN 🐹',
            font: {
              size: 16,
            },
          },
        },
      },
    });
  }

  linspace(start: number, end: number, n: number): number[] {
    const step = (end - start) / (n - 1);
    return Array.from({ length: n }, (_, i) => start + i * step);
  }

  calculateHeartTop(x: number[], scale: number): number[] {
    return x.map(val => scale * Math.sqrt(1 - Math.pow(Math.abs(val) - 1, 2)));
  }

  calculateVShape(x: number[], scale: number): number[] {
    const vWidth = 2; //  Invertir cuerpo del corazón

    return x.map(val => scale * (Math.abs(val) - vWidth));
  }
}
