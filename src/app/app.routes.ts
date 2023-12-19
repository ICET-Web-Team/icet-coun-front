import { Routes } from '@angular/router';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { InquireRegComponent } from './components/c&m/inquire-reg/inquire-reg.component';
export const routes: Routes = [
    {
        path:'chart',
        component:ChartAppComponent 
    },
<<<<<<< HEAD
   {
    path:'counsellor-call-history',
    component:CCallHistoryComponent
   },
   {
    path:'manager-call-history',
    component:MCallHistoryComponent
   }
=======
    {
        path:'reg',
        component : InquireRegComponent
    }
>>>>>>> e0c77ec573fa91724b6ac3149e014a3711a355f3
];