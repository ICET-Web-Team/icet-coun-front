import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-m-call-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-call-history.component.html',
  styleUrl: './m-call-history.component.css'
})
export class MCallHistoryComponent implements OnInit{
  ngOnInit() {
   
  }
    img1="./assets/images/WhatsApp Image 2023-09-27 at 11.17.39.jpg";
    iconMissed="./assets/images/icons8-missed-call-16.png";
}
