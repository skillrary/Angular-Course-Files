import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.css']
})
export class ArrayExampleComponent implements OnInit {
  body_parts = {
    head: 1,
    hands: 2,
    legs: 2
  };

  countries = ["India", 'Japan', 'SriLanka'];

  persons = [
    {
      name: "Paresh-1",
      contact: 123
    },
    {
      name: "Paresh-2",
      contact: 456
    },
    {
      name: "Paresh-3",
      contact: 789
    },
    {
      name: "Paresh-1",
      contact: 123
    },
    {
      name: "Paresh-2",
      contact: 456
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
