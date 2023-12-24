import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { registerables } from 'chart.js/auto';
import { DarkModeService } from '../../../service/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  isDarkMode = false;
  private subscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode) => {
        this.isDarkMode = darkMode;
      }
    );
  }

  chartA: any;
  chartB: any;
  ngOnInit(): void {
    this.chartA = document.getElementById('chart-1');
    this.chartB = document.getElementById('chart-2');
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart() {
    new Chart(this.chartA, {
      type: 'polarArea',
      data: {
        labels: ['fsdf', 'gfdsf', 'fdsf'],
        datasets: [
          {
            label: '# of Votes',
            data: [60, 500, 800],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
    new Chart(this.chartB, {
      type: 'bar',
      data: {
        labels: ['fsdf', 'gfdsf', 'fdsf'],
        datasets: [
          {
            label: '# of Votes',
            data: [60, 500, 800],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
  enableDarkMode() {
    var check = document.getElementById('checkbox') as HTMLInputElement;
    var chart = document.querySelector('.chartsBx');
    var cards = document.querySelectorAll('.report-card');
    var cardsTitle = document.querySelectorAll('.numbers');
    var cardsSubTitle = document.querySelectorAll('.cardName');
    console.log(check.checked);

    if (check.checked) {
      chart?.classList.add('dark-mode');
      cards.forEach(function (value) {
        value.classList.add('dark-mode');
      });
      cardsTitle.forEach(function (value) {
        value.classList.add('dark-mode');
      });
      cardsSubTitle.forEach(function (value) {
        value.classList.add('dark-mode');
      });
    } else {
      chart?.classList.remove('dark-mode');
      cards.forEach(function (value) {
        value.classList.remove('dark-mode');
      });
      cardsTitle.forEach(function (value) {
        value.classList.remove('dark-mode');
      });
      cardsSubTitle.forEach(function (value) {
        value.classList.remove('dark-mode');
      });
    }
  }
}
