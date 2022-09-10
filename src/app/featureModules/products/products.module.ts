import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';
import { CategoriesFilterComponent } from './categories-filter/categories-filter.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    ProductsViewComponent,
    CategoriesFilterComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,

  ]
})
export class ProductsModule { }
