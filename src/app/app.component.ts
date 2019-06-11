import { Component } from '@angular/core';
import {WardPageComponent} from './wardpage/wardpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Hospitality Management';
  loading = true;

  constructor(){
    this.loading=false;
  }
}
