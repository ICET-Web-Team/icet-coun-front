import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inquire-reg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inquire-reg.component.html',
  styleUrl: './inquire-reg.component.css',
})
export class InquireRegComponent implements OnInit {
  ngOnInit(): void {
    const dateNowElement: HTMLElement | null =
      document.getElementById('dateNow');
    if (dateNowElement) {
      const currentDate: string = this.getCurrentDate();
      dateNowElement.innerHTML = currentDate;
    }
  }

  private getCurrentDate(): string {
    const dateTime: Date = new Date();
    return dateTime.toLocaleDateString();
  }

  // getCurrentDate() {
  //   const dateTime = new Date;
  //   return dateTime.toLocaleDateString();
  // }

  phoneNumberValidation(selectObject: HTMLInputElement) {
    var value = selectObject.value;
    if (value[0] == '0' && value[1] == '7') {
      selectObject.style.borderColor = 'red';
    }
    // document.getElementById("p2").style.color = "blue";
  }

  btnClick() {
    const contact = document.getElementById('contact') as HTMLInputElement;
    console.log(contact.value);
    var value = contact.value;
    (<HTMLInputElement>document.getElementById('whatsapp')).value =
      contact.value;
    // document.getElementById('whatsapp')?.setAttribute("121351",contact.value);
  }

  isVisitation(selectObject: HTMLSelectElement): void {
    const isCheck = selectObject.value;

    const visitationDate = document.getElementById(
      'visitationDate'
    ) as HTMLInputElement;
    const visitationTime = document.getElementById(
      'visitationTime'
    ) as HTMLInputElement;

    this.toggleElementDisabled(
      [visitationDate, visitationTime],
      isCheck === 'No'
    );
  }

  isIqTestRequired(selectObject: HTMLSelectElement): void {
    const isCheck = selectObject.value;

    const iqTestDate = document.getElementById(
      'iqTestDate'
    ) as HTMLInputElement;
    const iqTestTime = document.getElementById(
      'iqTestTime'
    ) as HTMLInputElement;
    const iqModel = document.getElementById('iqModel') as HTMLInputElement;
    const iqMedium = document.getElementById('iqMedium') as HTMLInputElement;

    this.toggleElementDisabled(
      [iqTestDate, iqTestTime, iqModel, iqMedium],
      isCheck === 'No'
    );
  }

  private toggleElementDisabled(
    elements: HTMLInputElement[],
    disable: boolean
  ): void {
    elements.forEach((element) => {
      element.disabled = disable;
    });
  }

  changeDarkMood(checked: boolean) {
    console.log('Methhod Called...........');
    var customFields = document.querySelectorAll('.customField');
    var box = document.querySelectorAll('.box-part');
    var lable = document.querySelectorAll('.lable');
    var floatingLabel = document.getElementById('floatingLabel')?.innerHTML;

    if (checked) {
      customFields.forEach(function (field) {
        field.classList.add('dark-mode');
      });
      // add dark mode to mainBox
      box.forEach(function (field) {
        field.classList.add('dark-mode');
      });
      // add dark mode to lable
      lable.forEach(function (field) {
        field.classList.add('dark-mode');
      });
      // floatingLabel.classList.add("dark-mode");
    } else {
      customFields.forEach(function (field) {
        field.classList.remove('dark-mode');
      });
      // remove dark mode to mainBox
      box.forEach(function (field) {
        field.classList.remove('dark-mode');
      });
      // remove dark mode to lable
      lable.forEach(function (field) {
        field.classList.remove('dark-mode');
      });
    }
  }
}
