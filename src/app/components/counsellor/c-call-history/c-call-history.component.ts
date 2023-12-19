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
  ngOnInit(): void {
    
  }
  img1="./assets/images/WhatsApp Image 2023-09-27 at 11.17.39.jpg";
  iconMissed="./assets/images/icons8-missed-call-16.png";
 
}
