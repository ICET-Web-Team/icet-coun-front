import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-c-call-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-call-history.component.html',
  styleUrl: './c-call-history.component.css'
})
export class CCallHistoryComponent implements OnInit{
img2: any;
  ngOnInit(): void {
    
  }
  img1="./assets/images/WhatsApp Image 2023-09-27 at 11.17.39.jpg";
  pic2="./assets/images/WhatsApp Image 2023-09-10 at 09.17.26.jpg";
  img3="./assets/images/sha.jpg"
  iconMissed="./assets/images/icons8-missed-call-16.png";
  iconOuted="./assets/images/outgoing.png";
  iconIncome="./assets/images/incoming.png"
}
