import { Routes } from '@angular/router';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { InquireRegComponent } from './components/c&m/inquire-reg/inquire-reg.component';
import { MCallHistoryComponent } from './components/manager/m-call-history/m-call-history.component';
import { CounsellorRegComponent } from './components/manager/counsellor-reg/counsellor-reg.component';
import { ReportsComponent } from './components/manager/reports/reports.component';

export const routes: Routes = [
  {
    path : 'reports',
    component : ReportsComponent
  },
  {
    path: 'chart',
    component: ChartAppComponent,
  },
  {
    path: 'inquire-registration',
    component: InquireRegComponent,
  },
  {
    path: 'm-call-history',
    component: MCallHistoryComponent,
  },
  {
    path: 'counsellor-reg',
    component: CounsellorRegComponent,
  },
];
