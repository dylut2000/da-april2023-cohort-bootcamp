import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SHOP_API } from '../../environment';
import { ProductRequest, Product } from '../types/data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductRequest> {
    return this.http.get<ProductRequest>(SHOP_API);
  }

  getSingleProctuct(productId: string): Observable<Product> {
    return this.http.get<Product>(SHOP_API + '/' + productId);
  }
}
