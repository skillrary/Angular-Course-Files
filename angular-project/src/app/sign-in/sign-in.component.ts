import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    signInForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
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
        console.log(this._v);
    }

    get _v() {
        return this.signInForm.value;
    }

    getformControl(formControl: any) {
        return this.signInForm.get(formControl) as FormArray;
    }

}
