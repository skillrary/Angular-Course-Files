import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 1;
  // name = 'Paresh';

  username = '';
  @ViewChild(HeaderComponent) child: any;
  constructor(
    private messageService: MessageService
  ) {
    setTimeout(() => {
      // console.log("After 5 Sec");
    }, 5000);

    setTimeout(() => {
      // console.log("After 4 Sec")
    }, 4000);

    // let intObj = setInterval(() => {
    //   this.counter++;
    //   if (this.counter === 30) {
    //     clearInterval(intObj);
    //   }
    // }, 1000);

    this.messageService.currentMessage.subscribe(res => {
      if (res === 'User-Logged-In') {
        this.loadUser();
      }
    });

  }

  loadUser() {
    if (localStorage.getItem('loggedInWith')) {
      this.username = localStorage.getItem('loggedInWith') || '';
    } else {
      this.username = '';
    }
  }

  ngOnInit() {
    this.loadUser();
  }

  ngAfterViewInit() {
    // console.log(this.child);
    // console.log("ngAfterViewInit");

    setTimeout(() => {
      // this.child.username = 'Paresh Gami';
    }, 5000);
  }

  childToParent(name: string) {
    // console.log(name);
  }
}
