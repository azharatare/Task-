// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/products.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addProduct } from '../actions/products.action';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private addProductForm!: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private http: HttpClient,
    private readonly store: Store) { }

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(
        'https://api.restful-api.dev/objects'
      )
      .pipe(map((products) => products));
  }

  public createForm(): FormGroup {
    this.addProductForm = this.formBuilder.group({
        id: [],
        name: [null, [Validators.required]],
        color: [null],
        capacity: [null],
        price: [null],
        generation: [null],
        year: [null],
        hardDiskSize: [null],
        strapColor: [null],
        caseSize: [null],
        description: [null],
        screenSize: [null],
        capacityGB: [null],
        cpyModel: [null]
    });
    return this.addProductForm
  }

  public addProduct(product: Product){
    this.store.dispatch(addProduct({ product }));
  }

}
