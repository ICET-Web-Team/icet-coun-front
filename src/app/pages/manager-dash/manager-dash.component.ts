import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dash',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './manager-dash.component.html',
  styleUrl: './manager-dash.component.css'
})
export class ManagerDashComponent implements OnInit {
  
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
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach(item => {
      const li = (item as HTMLElement).parentElement;

      item.addEventListener('click', () => {
        allSideMenu.forEach(i => {
          (i as HTMLElement).parentElement?.classList.remove('active');
        });
        li?.classList.add('active');
      });
    });
  }

  private setupToggleSidebar() {
    const menuBar = document.querySelector('#content nav .bx.bx-menu') as HTMLElement;
    const sidebar = document.getElementById('sidebar');

    menuBar.addEventListener('click', () => {
      sidebar?.classList.toggle('hide');
    });
  }

  private setupSearchButton() {
    const searchButton = document.querySelector('#content nav form .form-input button') as HTMLElement;
    const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx') as HTMLElement;
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
    const switchMode = document.getElementById('switch-mode') as HTMLInputElement;

    switchMode.addEventListener('change', () => {
      if (switchMode.checked) {
        document.body.classList.add('dark');
      } else {
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