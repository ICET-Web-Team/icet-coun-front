import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inquire-reg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inquire-reg.component.html',
  styleUrl: './inquire-reg.component.css',
})
export class InquireRegComponent {
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
}
