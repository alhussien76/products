import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {};
  @Output() productIdEmitter: EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  toggleCardItem() {
    this.productIdEmitter.emit(this.product.id);
  }
}
