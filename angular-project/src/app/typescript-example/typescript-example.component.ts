import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-example',
  templateUrl: './typescript-example.component.html',
  styleUrls: ['./typescript-example.component.css']
})
export class TypescriptExampleComponent implements OnInit {
  array1 = [5, 12, 8, 130, 44];

  array2 = [
    {
      name: 'Paresh',
      age: 30,
    },
    {
      name: 'John',
      age: 25,
    },
    {
      name: 'Spiderman',
      age: 35,
    },
    {
      name: 'Ironman',
      age: 40,
    }
  ];

  constructor() { }

  ngOnInit(): void {
    const index = this.array1.findIndex(e => e === 12);
    console.log(index);

    const index1 = this.array2.find(e => e.age > 30);
    console.log(index1);
  
    const index2 = this.array2.filter(e => e.age > 29);
    console.log(index2);
  

    const lettersFromStart = ['a', 'b', 'c'];
    const lettersFromEnd = ['x', 'y', 'z'];

    // const alphaNumeric = lettersFromStart.concat(lettersFromEnd);
    // console.log(alphaNumeric);

    const alphaNumeric = [...lettersFromStart, ...lettersFromEnd, ...lettersFromEnd];
    console.log(alphaNumeric);
  }

}
