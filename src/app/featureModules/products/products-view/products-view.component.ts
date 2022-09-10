import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/core/util/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit, OnChanges {
  @Input() products: Product[] = [];
  constructor(private cartService: CartService) { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }
  // emit clicked card number
  togleCardItem(productId: number) {
    this.cartService.cartEmiiter.next(productId);
  }

}
