import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ChartAppComponent]
})
export class AppComponent {
  title = 'icet-coun-front';
}
