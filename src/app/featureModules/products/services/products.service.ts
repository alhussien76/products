import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Products> {
    return this.http.get<Products>('https://dummyjson.com/products?limit=100');
  }
  getAllProductsCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://dummyjson.com/products/categories');
  }
  getProductsByCategory(category: string): Observable<Products> {
    return this.http.get<Products>('https://dummyjson.com/products/category/' + category);
  }
  searchProducts(searchWord: string): Observable<Products> {
    return this.http.get<Products>(`https://dummyjson.com/products/search?q=${searchWord}`)
  }
}
