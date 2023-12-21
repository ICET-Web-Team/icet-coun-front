import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ChartAppComponent,
    ManagerDashComponent,
    LoginComponent,
  ],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor() {
    this.pageList = inject(PagesService).getPages();
    this.currentAdIndex = 0;
  }
  pageList: any;
  currentAdIndex: number;

  get currentPages() {
    return this.pageList[this.currentAdIndex];
  }

  displayNextPage(pageNumber : number) {
    this.currentAdIndex=pageNumber;
  }
}
