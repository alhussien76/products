import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile, tap } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories$ = this.productsService.getAllProductsCategories();
  selectedCategory: string = '';
  componentActive: boolean = true;

  constructor(private productsService: ProductsService) { }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productsService.getAllProducts().pipe(
      takeWhile(() => this.componentActive),
    ).subscribe({
      next: (products) => {
        this.products = products.products;
      },

    })
  }
  categoryChanged(category: string) {
    this.selectedCategory = category;
    if (this.selectedCategory) {
      this.productsService.getProductsByCategory(this.selectedCategory).pipe(
        takeWhile(() => this.componentActive),
      ).subscribe({
        next: (products) => {
          this.products = products.products;
        }
      })

    } else {
      this.getAllProducts();
    }
  }
}
