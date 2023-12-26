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
        labels: ['Facebook', 'Instagram', 'Youtube', 'Friend'],
        datasets: [
          {
            label: '# of Votes',
            data: [100, 50, 150, 70],
            backgroundColor: [
              'rgba(97,165,112)',
              'rgba(159,103,204)',
              'rgba(105,198,205)',
              'rgba(250,196,44)',
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
        labels: ['25%', '50%', '75%','100%'],
        datasets: [
          {
            label: 'No of Student in Lead Stage',
            data: [50, 120, 100,80],
            backgroundColor: [
              'rgba(250,117,110)',
              'rgba(2,185,57)',
              'rgba(184,159,0)',
              'rgba(245,100,227)',
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
