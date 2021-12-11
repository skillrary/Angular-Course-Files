import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations'

@Component({
  selector: 'app-animation-demo',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css']
})
export class AnimationDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
