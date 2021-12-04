import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  date = new Date();
  date1 = new Date('10-10-2020');
  constructor() { }

  ngOnInit(): void {
  }

}
