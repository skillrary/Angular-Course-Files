import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    signInForm: FormGroup;
    isPasswordVisible: boolean;
    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.signInForm = new FormGroup({
            emailAddress: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
        });
    }

    ngOnInit() {
    }

    onFormSubmit() {
        if (!this.signInForm.valid) {
            this.signInForm.markAllAsTouched();
            return;
        }
        const isLoggedIn = this.userService.checkUser(this._v.emailAddress, this._v.password);
        console.log(isLoggedIn);
        if (isLoggedIn) {
            this.messageService.changeMessage("User-Logged-In");
            this.router.navigate(['products']);
        }
    }

    get _v() {
        return this.signInForm.value;
    }

    getformControl(formControl: any) {
        return this.signInForm.get(formControl) as FormArray;
    }

}
