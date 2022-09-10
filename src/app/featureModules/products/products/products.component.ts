import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounce, debounceTime, switchMap, takeWhile, tap } from 'rxjs';
import { SearchService } from 'src/app/core/util/search.service';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  loading = false;
  categories$ = this.productsService.getAllProductsCategories();
  selectedCategory: string = '';
  componentActive: boolean = true;

  constructor(private productsService: ProductsService,
    private searchService: SearchService
  ) { }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
    this.getAllProducts();

    // listen to emitted searched word
    // switch source observable (searched word) to inner observable to get searched products
    // debounceTime delay the source observable emition to specific time (search after 500 ms of writing )
    this.searchService.searchedWord$.pipe(
      takeWhile(() => this.componentActive),
      debounceTime(700),
      switchMap((searchedWord) => {
        this.loading = true;
        return this.productsService.searchProducts(searchedWord)
      }
      )
    ).subscribe({
      next: (products) => {
        this.products = products.products;
        this.loading = false;
      }
    })

  }

  // get all products
  getAllProducts() {
    this.loading = true;
    this.productsService.getAllProducts().pipe(
      takeWhile(() => this.componentActive),
    ).subscribe({
      next: (products) => {
        this.loading = false;
        this.products = products.products;
      },

    })
  }
  // get categery products if selected or get all products
  categoryChanged(category: string) {
    this.selectedCategory = category;
    if (this.selectedCategory) {
      this.loading = true;
      this.productsService.getProductsByCategory(this.selectedCategory).pipe(
        takeWhile(() => this.componentActive),
      ).subscribe({
        next: (products) => {
          this.products = products.products;
          this.loading = false;
        }
      })
    } else {
      this.getAllProducts();
    }
  }
}
