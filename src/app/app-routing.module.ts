import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddProductsFormComponent } from './add-products-form/add-products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path : '', redirectTo:'/login', pathMatch:"full" },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/add', component: AddProductsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
