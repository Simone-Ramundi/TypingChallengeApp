import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* PROPERTIES */
  randomText = lorem.sentence();
  enteredText = '';

  protected readonly oninput = oninput;
  onInput(value: string){
    this.enteredText = value
  }
}
