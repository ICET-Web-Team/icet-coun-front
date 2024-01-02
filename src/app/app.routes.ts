import { Routes } from '@angular/router';
import { InquireRegComponent } from './components/c&m/inquire-reg/inquire-reg.component';
import { MCallHistoryComponent } from './components/manager/m-call-history/m-call-history.component';
import { CounsellorRegComponent } from './components/manager/counsellor-reg/counsellor-reg.component';
import { ReportsComponent } from './components/manager/reports/reports.component';
import { MInquiryListComponent } from './components/manager/m-inquiry-list/m-inquiry-list.component';
import { MTaskListComponent } from './components/manager/m-task-list/m-task-list.component';
import { CTaskListComponent } from './components/counsellor/c-task-list/c-task-list.component';
import { MDashboardComponent } from './components/manager/m-dashboard/m-dashboard.component';
import { CDashboardComponent } from './components/counsellor/c-dashboard/c-dashboard.component';
import { CCallHistoryComponent } from './components/counsellor/c-call-history/c-call-history.component';

export const routes: Routes = [
  {
    path: 'm-dashboard',
    component: MDashboardComponent,
  },
  {
    path: 'c-dashboard',
    component: CDashboardComponent,
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
    path: 'c-call-history',
    component: CCallHistoryComponent,
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
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'm-task',
    component: MTaskListComponent,
  },
  {
    path: 'c-task',
    component: CTaskListComponent,
  },
];
