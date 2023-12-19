import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { ManagerDashComponent } from "./pages/manager-dash/manager-dash.component";
import { CounsellorRegComponent } from "./components/manager/counsellor-reg/counsellor-reg.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ChartAppComponent, ManagerDashComponent, CounsellorRegComponent]
})
export class AppComponent {
  title = 'icet-coun-front';
}
