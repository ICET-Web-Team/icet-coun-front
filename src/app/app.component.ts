import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ManagerDashComponent } from './pages/manager-dash/manager-dash.component';
import { StatusComponentService } from './service/component/status.component.service';
import { MDashboardComponent } from "./components/manager/m-dashboard/m-dashboard.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        ManagerDashComponent,
        MDashboardComponent
    ]
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
