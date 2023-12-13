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
    const scale = 0.5;

    const y1 = this.calculateHeartTop(x, scale);
    const yV = this.calculateVShape(x, scale);

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x,
        datasets: [
          {
            label: 'Corazón',
            data: [...y1, ...yV],
            fill: false,
            borderColor: 'red',
            tension: 0.1,
          },
        ],
      },
      options: {
        // ...
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
    // Ajusta el ancho de la "V" modificando el factor de escala
    const vWidth = 0.02;
    
    return x.map(val => scale * (vWidth - Math.abs(val)));
  }
}




