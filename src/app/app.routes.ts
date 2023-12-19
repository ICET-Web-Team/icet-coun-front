import { Routes } from '@angular/router';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { CCallHistoryComponent } from './components/counsellor/c-call-history/c-call-history.component';

export const routes: Routes = [
    {
        path:'chart',
        component:ChartAppComponent 
    },
   {
    path:'call-history',
    component:CCallHistoryComponent
   }
];