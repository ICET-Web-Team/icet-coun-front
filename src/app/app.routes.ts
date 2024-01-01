import { Routes } from '@angular/router';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { InquireRegComponent } from './components/c&m/inquire-reg/inquire-reg.component';
import { MCallHistoryComponent } from './components/manager/m-call-history/m-call-history.component';
import { CounsellorRegComponent } from './components/manager/counsellor-reg/counsellor-reg.component';
import { ReportsComponent } from './components/manager/reports/reports.component';
import { MInquiryListComponent } from './components/manager/m-inquiry-list/m-inquiry-list.component';
import { MTaskListComponent } from './components/manager/m-task-list/m-task-list.component';

export const routes: Routes = [
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
    path: 'inquiry-list',
    component: MInquiryListComponent,
  },
  {
    path: 'counsellor-reg',
    component: CounsellorRegComponent,
  },
  {
    path : 'reports',
    component : ReportsComponent
  },
  {
    path : 'm-task',
    component : MTaskListComponent
  }
];
