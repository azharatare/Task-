import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductsFormComponent } from './add-products-form/add-products-form.component';
import { StoreModule } from '@ngrx/store';
import { SignUpEffects } from './shared/effects/sign-up.effects';
import { reducer, userFeatureKey } from './shared/reducers/sign-up.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './shared/reducers';
import { LoginEffects } from './shared/effects/login.effects';
import { ProductEffects } from './shared/effects/product.effects';
import { productFeatureKey, productsReducer } from './shared/reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductsListComponent,
    AddProductsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({productsReducer, reducer}),
    StoreModule.forFeature(userFeatureKey, reducer),
    StoreModule.forFeature(productFeatureKey, productsReducer),
    EffectsModule.forRoot([SignUpEffects, LoginEffects, ProductEffects]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
