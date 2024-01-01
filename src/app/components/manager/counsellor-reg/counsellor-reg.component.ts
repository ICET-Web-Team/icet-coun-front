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

  

  ngOnInit(): void {
    const passwordConfirm = document.getElementById('password_confirm') as HTMLInputElement;
    passwordConfirm.addEventListener('change', this.checkPasswordEquality.bind(this));
  }

  

  // Function to run when password_confirm element is changed
  checkPasswordEquality(): void {
    const passwordInput = document.getElementById('password_input') as HTMLInputElement;
    const passwordConfirm = document.getElementById('password_confirm') as HTMLInputElement;
    const registerButton = document.getElementById('btn_register') as HTMLButtonElement;

    if (passwordInput.value !== passwordConfirm.value) {
      registerButton.disabled = true;
      passwordConfirm.style.borderColor = 'red'; // Set border color to red
      
    } else {
      registerButton.disabled = false;
      passwordConfirm.style.borderColor = ''; // Reset border color
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}