import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DarkModeService } from '../../../service/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-m-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-dashboard.component.html',
  styleUrl: './m-dashboard.component.css',
})
export class MDashboardComponent {
  isDarkMode = false;
  private subscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode) => {
        this.isDarkMode = darkMode;
      }
    );
  }

  chart: any;

  ngOnInit(): void {
    this.chart = document.getElementById('progress_chart');
    Chart.register(...registerables);
    this.loadChart();
  }
  loadChart() {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70, 100],
            label: 'Progress',
            backgroundColor: '#fff',
            tension: 0.2,
            borderColor: '#521164',
          },
        ],
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Des',
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
