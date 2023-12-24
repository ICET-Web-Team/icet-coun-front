import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { DarkModeService } from '../../../service/dark-mode/dark-mode.service';

@Component({
  selector: 'app-m-call-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-call-history.component.html',
  styleUrl: './m-call-history.component.css',
})
export class MCallHistoryComponent{

  isDarkMode = false;
  private subscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode) => {
        this.isDarkMode = darkMode;
      }
    );
  }

  iconMale = './assets/images/icon-male.png';
  iconFemale = './assets/images/icon-female.png';

  iconMissed = './assets/images/icons8-missed-call-16.png';
  iconOuted = './assets/images/outgoing.png';
  iconIncome = './assets/images/incoming.png';
}
