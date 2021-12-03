import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ls-example',
  templateUrl: './ls-example.component.html',
  styleUrls: ['./ls-example.component.css']
})
export class LsExampleComponent implements OnInit {
  name: string = '';
  village:string = '';
  users: {
    name: string,
    village: string
  }[] = [];
  LS_USERS = 'my-users';

  editIndex = -1;
  constructor() {
  }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem(this.LS_USERS) || '[]');
  }

  saveData() {
    if (this.name.trim() && this.village.trim()) {      
      if (this.editIndex === -1) {
        this.users.push({
          name: this.name,
          village: this.village
        });
      } else {
        this.users[this.editIndex] = {
          name: this.name,
          village: this.village
        }
      }
      this.editIndex = -1;
      this.name = '';
      this.village = '';
      this.saveUserTols();
    } else {
      alert("Please enter name and village");
    }
  }

  deleteUser(ind: number) {
    console.log(ind);
    this.users.splice(ind, 1);
    this.saveUserTols();
  }

  saveUserTols() {
    localStorage.setItem(this.LS_USERS, JSON.stringify(this.users));
  }

  editUser(ind: number) {
    this.editIndex = ind;
    const user = this.users[ind];

    this.name = user.name;
    this.village = user.village;
  }
}
