import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  backgroundStyle: SafeStyle;

  constructor(
    private sanitizer: DomSanitizer,
    private appComponent: AppComponent
  ) {
    const imageUrl = 'assets/images/background.jpg';
    this.backgroundStyle = this.sanitizer.bypassSecurityTrustStyle(
      `url(${imageUrl})`
    );
  }

  ngOnInit(): void {}
  imageUrls: string[] = [
    'assets/images/logo.png',
    'assets/images/background.jpg',
  ];
  height = screen.availHeight;

  onLoginButtonClick() {
    const userNameElement = document.getElementById(
      'userName-field'
    ) as HTMLInputElement;
    const passwordElement = document.getElementById(
      'password-field'
    ) as HTMLInputElement;

    fetch('http://localhost:3000/user/' + userNameElement.value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let password = data.data[0].pasword;
        if (passwordElement.value == password) {
          if (data.data[0].type == 1) {
            alert('manager');
            this.appComponent.displayNextPage(1);
          } else {
            alert('user');
            this.appComponent.displayNextPage(2);
          }
        } else {
          alert('Incorect Password');
        }
      });
  }
}
