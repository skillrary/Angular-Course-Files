import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LsExampleComponent } from './ls-example/ls-example.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ArrayExampleComponent } from './array-example/array-example.component';
import { ProductsComponent } from './products/products.component';
import { TypescriptExampleComponent } from './typescript-example/typescript-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LsExampleComponent,
    SignInComponent,
    SignUpComponent,
    ArrayExampleComponent,
    ProductsComponent,
    TypescriptExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
