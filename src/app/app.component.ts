import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myvalue: string = '';
  myvalues: Array<string> = new Array<string>();
  myfunction() {
    this.myvalues.push(this.myvalue);
    this.myvalue = '';
  }
  age = 12;
}
