import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, NgStyle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onBoardingScreens = [
    { image: 'image1.jpg' },
    { image: 'image2.jpg' },
    { image: 'image3.jpg' },
  ];
  swiperModules = [IonicSlides];
}
