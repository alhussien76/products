import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.productsService.getAllProducts();
  categories$ = this.productsService.getAllProductsCategories();
  selectedCategory: string = '';
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
