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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LsExampleComponent,
    SignInComponent,
    SignUpComponent,
    ArrayExampleComponent,
    ProductsComponent,
    TypescriptExampleComponent,
    ProductDetailComponent,
    PipeExampleComponent,
    CustomDatePipe,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    PostDetailsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
