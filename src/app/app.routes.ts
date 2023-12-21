import { Routes } from '@angular/router';
import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { InquireRegComponent } from './components/c&m/inquire-reg/inquire-reg.component';
import { MCallHistoryComponent } from './components/manager/m-call-history/m-call-history.component';
import { LoginComponent } from './pages/login/login.component';
import { CounsellorRegComponent } from './components/manager/counsellor-reg/counsellor-reg.component';
import { CInquiryListComponent } from './components/counsellor/c-inquiry-list/c-inquiry-list.component';

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
    path: 'call-history',
    component: MCallHistoryComponent,
  },
  {
    path: 'inquiry-list',
    component: CInquiryListComponent,
  },
  {
    path: 'counsellor-reg',
    component: CounsellorRegComponent,
  },
];
