import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';
import { CategoriesFilterComponent } from './categories-filter/categories-filter.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ProductsViewComponent,
    CategoriesFilterComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
