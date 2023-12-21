import { Injectable } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { CounsellorDashComponent } from './pages/counsellor-dash/counsellor-dash.component';
import { CounsellorRegComponent } from './components/manager/counsellor-reg/counsellor-reg.component';

@Injectable({ providedIn: 'root' })
export class PagesService {
  getPages() {
    return [
      {
       component : LoginComponent
      },
      {
        component: ManagerDashComponent,
      },
      {
        component: CounsellorDashComponent,
      }
    ];
  }
}
