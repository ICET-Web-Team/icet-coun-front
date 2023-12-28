import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { DarkModeService } from '../../../service/dark-mode/dark-mode.service';

@Component({
  selector: 'app-m-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-task-list.component.html',
  styleUrl: './m-task-list.component.css',
})
export class MTaskListComponent {
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
  imgUrlTask: String = 'srcassets/images/payment.png';
  imgUrlC: String = 'assets/images/correct.png';
  imgUrlSide: String = 'assets/images/slider.png';
  isFilterPopUp: boolean = false;

  showfilterPopUp() {
    const filterPopup = document.getElementById('filterPopup');
    if (this.isFilterPopUp) {
      this.closefilterPopUp();
    } else {
      if (filterPopup) {
        filterPopup.style.display = 'block';
        this.isFilterPopUp = true;
      }
    }
  }

  closefilterPopUp() {
    const filterPopup = document.getElementById('filterPopup');
    if (filterPopup) {
      filterPopup.style.display = 'none';
      this.isFilterPopUp = false;
    }
  }

  isSearchBtnClicked() {
    this.closefilterPopUp();
  }
}
