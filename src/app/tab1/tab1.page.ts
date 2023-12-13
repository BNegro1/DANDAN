import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private titleService: Title) {}

  ionViewWillEnter() {
    this.titleService.setTitle('Página Principal');
  }


}
