import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../service/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-c-call-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-call-history.component.html',
  styleUrl: './c-call-history.component.css',
})
export class CCallHistoryComponent implements OnInit {
  isDarkMode = false;
  private subscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode) => {
        this.isDarkMode = darkMode;
      }
    );
  }
  img2: any;
  ngOnInit(): void {}
  iconMale = './assets/images/icon-male.png';
  iconFemale = './assets/images/icon-female.png';
  iconMissed = './assets/images/icons8-missed-call-16.png';
  iconOuted = './assets/images/outgoing.png';
  iconIncome = './assets/images/incoming.png';
}
