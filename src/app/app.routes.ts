import { Routes } from '@angular/router';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { CallHistoryComponent } from './components/c&m/call-history/call-history.component';
export const routes: Routes = [
    {
        path:'chart',
        component:ChartAppComponent 
    },
    {
        path:'call-history',
        component:CallHistoryComponent
    }
];