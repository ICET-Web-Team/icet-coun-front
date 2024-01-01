import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ChartAppComponent } from './components/manager/student_progress/chart-app/chart-app.component';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { StatusComponentService } from './service/component/status.component.service';
import { MTaskListComponent } from "./components/manager/m-task-list/m-task-list.component";
import { CTaskListComponent } from "./components/counsellor/c-task-list/c-task-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ManagerDashComponent,
  ],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor() {
    this.pageList = inject(StatusComponentService).getPages();
    this.currentAdIndex = 0;
  }
  pageList: any;
  currentAdIndex: number;

  get currentPages() {
    return this.pageList[this.currentAdIndex];
  }

  displayNextPage(pageNumber: number) {
    this.currentAdIndex = pageNumber;
  }
}
