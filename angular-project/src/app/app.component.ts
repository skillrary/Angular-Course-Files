import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 1;
  name = 'Paresh';

  @ViewChild(HeaderComponent) child: any;
  constructor() {

    console.log("constructor");

    setTimeout(() => {
      console.log("After 5 Sec");
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
    console.log("ngOnInit");
  }

  ngAfterViewInit() {
    console.log(this.child);
    console.log("ngAfterViewInit");

    setTimeout(() => {
      this.child.username = 'Paresh Gami';
    }, 5000);
  }

  childToParent(name: string) {
    console.log(name);
  }
}
