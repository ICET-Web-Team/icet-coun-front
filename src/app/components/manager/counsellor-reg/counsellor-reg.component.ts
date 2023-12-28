import { Component } from '@angular/core';
import { DarkModeService } from '../../../service/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-counsellor-reg',
  standalone: true,
  imports: [],
  templateUrl: './counsellor-reg.component.html',
  styleUrl: './counsellor-reg.component.css'
})
export class CounsellorRegComponent {
  imageUrl: string = 'assets/images/happy 1.png';

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
