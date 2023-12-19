import { Routes } from '@angular/router';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { CCallHistoryComponent } from './components/counsellor/c-call-history/c-call-history.component';
import { MCallHistoryComponent } from './components/manager/m-call-history/m-call-history.component';

export const routes: Routes = [
    {
        path:'chart',
        component:ChartAppComponent 
    },
   {
    path:'counsellor-call-history',
    component:CCallHistoryComponent
   },
   {
    path:'manager-call-history',
    component:MCallHistoryComponent
   }
];