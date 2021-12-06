import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() username:string;
  @Output() childToParent = new EventEmitter();
  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // console.log(this.username);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['sign-in']);
    this.messageService.changeMessage('User-Logged-In');
  }

}
