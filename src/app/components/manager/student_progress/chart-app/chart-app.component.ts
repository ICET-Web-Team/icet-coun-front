import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-chart-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-app.component.html',
  styleUrl: './chart-app.component.css'
})
export class ChartAppComponent implements OnInit{
  chart:any;
  constructor(){}

  ngOnInit(): void {
    this.chart = document.getElementById('progress_chart');
    Chart.register(...registerables);
    this.loadChart();
  }
  loadChart() {
    new Chart(this.chart, {
      type:'line',
      data:{
        datasets: [{
          data: [30,60,40,50,40,55,85,65,75,50,70,100],
          label: 'Progress',
          backgroundColor: '#fff',
          tension:0.2,
          borderColor:'#521164',
        }],
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
    options:{
      responsive:true,
      maintainAspectRatio: false,
      scales:{
        y:{
          beginAtZero: true,
        }
      }
    }
     });
  }

}


