import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NgIf, NgOptimizedImage } from '@angular/common';

interface Hero {
  id: number;
  name: string;
  imgSrc?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    NgIf,
    NgOptimizedImage,
  ],
})
export class HomePage {
  hero: Hero = {
    id: 2,
    name: 'Windstorm',
  };

  constructor() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });
    this.hero.imgSrc = image.webPath;
  }
}
