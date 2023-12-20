import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-m-call-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-call-history.component.html',
  styleUrl: './m-call-history.component.css',
})
export class MCallHistoryComponent implements OnInit {
  ngOnInit() {}
  changeDarkMode(check: boolean) {
    console.log('method have called ....');
    var customFields = document.querySelectorAll('.customFields');

    if (check) {
      customFields.forEach(function (mode) {
        mode.classList.add('dark-mode');
        console.log('method have called ....');
      });
    } else {
      customFields.forEach(function (mode) {
        mode.classList.remove('dark-mode');
        console.log('method have called ....');
      });
    }
  }

  iconMale = './assets/images/icon-male.png';
  iconFemale = './assets/images/icon-female.png';

  iconMissed = './assets/images/icons8-missed-call-16.png';
  iconOuted = './assets/images/outgoing.png';
  iconIncome = './assets/images/incoming.png';
}
