import { Routes } from '@angular/router';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
    {
        path:'chart',
        component:ChartAppComponent 
    },
    {
        path :'login',
        component:LoginComponent
    }
];