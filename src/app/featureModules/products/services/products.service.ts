import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://dummyjson.com/products');
  }
  getAllProductsCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://dummyjson.com/products/categories');
  }
}
