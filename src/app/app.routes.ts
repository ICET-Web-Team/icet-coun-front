import { Routes } from '@angular/router';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { CompletedProgressChartComponent } from './components/manager/student_progress/completed-progress-chart/completed-progress-chart.component';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
export const routes: Routes = [
    {
        path:'chart',
        component:ChartAppComponent 
    }
];