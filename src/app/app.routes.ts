import { Routes } from '@angular/router';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { InquireRegComponent } from './components/c&m/inquire-reg/inquire-reg.component';

export const routes: Routes = [
    {
        path:'chart',
        component:ChartAppComponent 
    },
    {
        path:'reg',
        component : InquireRegComponent

    }
];