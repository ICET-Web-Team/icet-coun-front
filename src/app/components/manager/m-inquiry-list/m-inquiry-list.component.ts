import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { DarkModeService } from '../../../service/dark-mode/dark-mode.service';

@Component({
  selector: 'app-m-inquiry-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-inquiry-list.component.html',
  styleUrl: './m-inquiry-list.component.css',
})
export class MInquiryListComponent {
  isDarkMode = false;
  private subscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode) => {
        this.isDarkMode = darkMode;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
