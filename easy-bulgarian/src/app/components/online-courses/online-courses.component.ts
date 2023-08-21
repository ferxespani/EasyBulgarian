import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-online-courses',
  templateUrl: './online-courses.component.html',
  styleUrls: ['./online-courses.component.css'],
})
export class OnlineCoursesComponent implements OnInit {
  constructor(public paymentDialog: MatDialog) {}

  ngOnInit(): void {}

  chosenLessons: boolean[] = [];
  chosenLessonsNames: string[] = [];
  lessons: string[] = ['Членуване', 'Спряжения'];

  openModal() {
    for (let i = 0; i < this.lessons.length; i++) {
      if (this.chosenLessons[i]) {
        this.chosenLessonsNames.push(`${this.lessons[i]} (С обратной связью)`);
      } else if (this.chosenLessons[i] === false) {
        this.chosenLessonsNames.push(`${this.lessons[i]} (Без обратной связи)`);
      }
    }

    this.paymentDialog.open(PaymentDialogComponent, {
      data: {
        chosenLessons: this.chosenLessonsNames,
      },
    });
  }

  resetChoise() {
    this.chosenLessons = [];
    this.chosenLessonsNames = [];
  }
}
