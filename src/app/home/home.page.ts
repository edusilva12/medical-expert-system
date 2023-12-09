import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { refreshCircle, refreshCircleSharp } from 'ionicons/icons';

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

  constructor() {
    addIcons({ refreshCircle, refreshCircleSharp });
  }

  ngOnInit() {}

  toggleCard() {
    this.showCard = !this.showCard;
    this.showButtonStarted = !this.showButtonStarted;
  }
}
