import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calls.component.html',
  styleUrl: './calls.component.css'
})
export class CallsComponent implements OnInit {
  ngOnInit(){

  }
  img1="./assets/images/WhatsApp Image 2023-09-27 at 11.17.39.jpg";
  iconMissed="./assets/images/icons8-missed-call-16.png";
}
