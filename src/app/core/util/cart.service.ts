import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartEmiiter: Subject<number> = new Subject();
  toggleCartItem$ = this.cartEmiiter.asObservable();
  constructor() { }
}
