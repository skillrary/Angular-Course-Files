import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 1;
  constructor() {
    setTimeout(() => {
      console.log("After 5 Sec")
    }, 5000);

    setTimeout(() => {
      console.log("After 4 Sec")
    }, 4000);

    let intObj = setInterval(() => {
      this.counter++;
      if (this.counter === 30) {
        clearInterval(intObj);
      }
    }, 1000);
  }

  ngOnInit() {
  }
}
