import { Component } from '@angular/core';
import {
  cholesterol,
  diabetics,
  ebola,
  gastritis,
  parkinson,
  pneumonia,
} from './data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cardQuestions: boolean = false;
  cardAnswer: boolean = false;
  buttonInitial: boolean = true;
  questionText: string = '';
  answerText: string = '';
  counter: number = 0;
  counterQuestionsList: number = 0;
  listAnswer: Array<string> = [];
  constructor() {}

  reset() {
    this.counter = 0;
    this.counterQuestionsList = 0;
    this.questionText = '';
    this.answerText = '';
    this.cardAnswer = false;
    this.cardQuestions = false;
    this.buttonInitial = true;
  }

  setCardQuestions() {
    this.cardQuestions = !this.cardQuestions;
  }

  setCardAnswer() {
    this.cardAnswer = !this.cardAnswer;
  }

  setButtonInitial() {
    this.buttonInitial = !this.buttonInitial;
  }

  validateAnswer(questionsList: Array<string>) {
    if (this.counter < questionsList.length) {
      this.questionText = questionsList[this.counter];
      if (this.counter + 1 == questionsList.length) {
        this.questionText = questionsList[this.counter - 1];
        //this.answerText = questionsList[this.counter];
        this.listAnswer = questionsList[this.counter].split(';');
        this.setCardQuestions();
        this.setCardAnswer();
      }
      this.counter++;
    }
  }

  question(answer: boolean) {
    if (!answer) {
      this.counterQuestionsList++;
      this.counter = 0;
      this.question(true);
    }
    if (answer) {
      switch (this.counterQuestionsList) {
        case 0:
          this.validateAnswer(cholesterol);
          break;
        case 1:
          this.validateAnswer(diabetics);
          break;
        case 2:
          this.validateAnswer(ebola);
          break;
        case 3:
          this.validateAnswer(pneumonia);
          break;
        case 4:
          this.validateAnswer(gastritis);
          break;
        case 5:
          this.validateAnswer(parkinson);
          break;
        default:
          {
            this.cardQuestions = false;
            this.cardAnswer = true;
            this.answerText = 'No estoy entrenado para darte ese diagnostico';
          }
          break;
      }
    }
  }
}
