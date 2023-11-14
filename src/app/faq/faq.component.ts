import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  showAnswer: { [key: number]: boolean } = {};

  toggleAnswer(questionId: number) {
    this.showAnswer[questionId] = !this.showAnswer[questionId];
  }
}
