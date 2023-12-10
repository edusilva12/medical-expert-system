import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { refreshCircle, refreshCircleSharp } from 'ionicons/icons';
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
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  showCard = false;
  showButtonStarted = true;

  // new code
  cardQuestions: boolean = false;
  cardAnswer: boolean = false;
  buttonInitial: boolean = true;
  questionText: string = '';
  answerText: string = '';
  counter: number = 0;
  counterQuestionsList: number = 0;

  constructor() {
    addIcons({ refreshCircle, refreshCircleSharp });
  }

  ngOnInit() {}

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
        this.answerText = questionsList[this.counter];
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

  // old code
  toggleCard() {
    this.showCard = !this.showCard;
    this.showButtonStarted = !this.showButtonStarted;
  }

  resetBtnCard() {
    this.showCard = false;
    this.showButtonStarted = true;
  }
}
