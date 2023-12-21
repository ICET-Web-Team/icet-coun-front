import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { InquireRegComponent } from '../../components/c&m/inquire-reg/inquire-reg.component';
import { Router } from '@angular/router';
import { MCallHistoryComponent } from '../../components/manager/m-call-history/m-call-history.component';

@Component({
  selector: 'app-manager-dash',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './manager-dash.component.html',
  styleUrl: './manager-dash.component.css',
})
export class ManagerDashComponent implements OnInit {
  constructor(private router: Router) {}
  navigateComponent(value: String) {
    switch (value) {
      case 'dashboard':
        this.router.navigate(['/chart']);
        break;
      case 'inquiries':
        this.router.navigate(['/inquire-registration']);
        break;
      case 'reports':
        this.router.navigate(['/inquire-registration']);
        break;
      case 'issues':
        this.router.navigate(['/inquire-registration']);
        break;
      case 'viewtask':
        this.router.navigate(['/inquire-registration']);
        break;
      case 'settings':
        this.router.navigate(['/inquire-registration']);
        break;
      case 'logout':
        this.router.navigate(['/inquire-registration']);
        break;
      case 'callhistory':
        this.router.navigate(['/call-history']);
        break;
      case 'issues':
        this.router.navigate(['/inquire-registration']);
        break;
      default:
        console.log('Not definde URL');
    }
  }

  imageUrl: string = 'assets/images/girl.png';

  isSidebarHidden = false;
  isDashboardSectionVisible = true;
  isInquiriesSectionVisible = false;

  ngOnInit() {
    this.setupSideMenuClickEvent();
    this.setupToggleSidebar();
    this.setupSearchButton();
    this.setupWindowResize();
    this.setupSwitchMode();
  }

  private setupSideMenuClickEvent() {
    const allSideMenu = document.querySelectorAll(
      '#sidebar .side-menu.top li a'
    );
    allSideMenu.forEach((item) => {
      const li = (item as HTMLElement).parentElement;

      item.addEventListener('click', () => {
        allSideMenu.forEach((i) => {
          (i as HTMLElement).parentElement?.classList.remove('active');
        });
        li?.classList.add('active');
      });
    });
  }

  private setupToggleSidebar() {
    const menuBar = document.querySelector(
      '#content nav .bx.bx-menu'
    ) as HTMLElement;
    const sidebar = document.getElementById('sidebar');

    menuBar.addEventListener('click', () => {
      sidebar?.classList.toggle('hide');
    });
  }

  private setupSearchButton() {
    const searchButton = document.querySelector(
      '#content nav form .form-input button'
    ) as HTMLElement;
    const searchButtonIcon = document.querySelector(
      '#content nav form .form-input button .bx'
    ) as HTMLElement;
    const searchForm = document.querySelector('#content nav form');

    searchButton.addEventListener('click', (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm?.classList.toggle('show');
        if (searchForm?.classList.contains('show')) {
          searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
      }
    });
  }

  private setupWindowResize() {
    if (window.innerWidth < 768) {
      this.isSidebarHidden = true;
    } else if (window.innerWidth > 576) {
      // Adjust as needed based on your requirements
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        // Adjust as needed based on your requirements
      }
    });
  }

  private setupSwitchMode() {
    const switchMode = document.getElementById(
      'switch-mode'
    ) as HTMLInputElement;
    const inquireDarkMode = new InquireRegComponent();
    const mCHistoryTableDarkMode=new MCallHistoryComponent();
    const routerBody = document.getElementById('router-body');

    switchMode.addEventListener('change', () => {
      if (switchMode.checked) {
        routerBody?.classList.add('dark-mode');
        inquireDarkMode.changeDarkMood(true);
        mCHistoryTableDarkMode.changeDarkMode(true);
        document.body.classList.add('dark');
      } else {
        routerBody?.classList.remove('dark-mode');
        inquireDarkMode.changeDarkMood(false);
        mCHistoryTableDarkMode.changeDarkMode(false);
        document.body.classList.remove('dark');
      }
    });
  }

  showDashboard() {
    this.isDashboardSectionVisible = true;
    this.isInquiriesSectionVisible = false;
  }

  showInquiries() {
    this.isDashboardSectionVisible = false;
    this.isInquiriesSectionVisible = true;
  }
}
