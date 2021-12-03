import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayExampleComponent } from './array-example/array-example.component';
import { LsExampleComponent } from './ls-example/ls-example.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TypescriptExampleComponent } from './typescript-example/typescript-example.component';


export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'ls-example', component: LsExampleComponent },
  { path: 'array-example', component: ArrayExampleComponent },
  { path: 'typescript', component: TypescriptExampleComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
