import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() username:string;
  @Output() childToParent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.username);
  }

  logout() {
    this.childToParent.emit('Lorem Ipsum');
  }

}
