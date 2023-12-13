// call-history.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.css']
})
export class CallHistoryComponent {

  headers = ["Name", "Type", "Duration", "Date"];

  rows: { [key: string]: string }[] = [
    {
      "Name": "Hasindu Herath",
      "Type": "Missed Call",
      "Duration": "02s",
      "Date": "09/02"
    },
    {
      "Name": "Keshan Nandasena",
      "Type": "Outgoing",
      "Duration": "05s",
      "Date": "09/02"
    },
    {
      "Name": "Ashen Perera",
      "Type": "Missed Call",
      "Duration": "2s",
      "Date": "09/02"
    },
    {
      "Name": "Upeksha Swarnamali",
      "Type": "Missed Call",
      "Duration": "2s",
      "Date": "09/02"
    }
  ];
}
