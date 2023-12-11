import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartAppComponent } from "../chart-app/chart-app.component";

@Component({
    selector: 'app-completed-progress-chart',
    standalone: true,
    templateUrl: './completed-progress-chart.component.html',
    styleUrl: './completed-progress-chart.component.css',
    imports: [CommonModule, ChartAppComponent]
})
export class CompletedProgressChartComponent {

}
