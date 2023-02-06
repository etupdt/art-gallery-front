import { Product } from "../products/product.class";
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  products: Product[] = []
  displayProducts: Product[] = []

  public getAllBackProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.backendServer).pipe(
      map(res => this.products = res)
    )

  }

  public getAllFrontProducts() {
    return this.products
  }

}

