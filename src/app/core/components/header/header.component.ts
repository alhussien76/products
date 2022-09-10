import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay, takeWhile } from 'rxjs';
import { Product } from 'src/app/featureModules/products/models/product';
import { LoginService } from '../../authentication/services/login.service';
import { CartService } from '../../util/cart.service';
import { SearchService } from '../../util/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartProductIds: number[] = [];
  isLoggedIn$: Observable<boolean> = this.loginService.isloggedIn$.pipe(
    shareReplay()
  )
  componentActive: boolean = true;
  constructor(private loginService: LoginService,
    private searchService: SearchService,
    private cartService: CartService,
    private router: Router
  ) {
  }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
    // listen to clicked product 
    // if clicked product id not found in cart ids -> add clicked product id
    // if clicked product id found in cart ids -> remove clicked product id
    this.cartService.toggleCartItem$
      .pipe(
        takeWhile(() => this.componentActive)
      )
      .subscribe({
        next: (productId) => {
          const foundIndex = this.cartProductIds.findIndex(cartItemId => cartItemId === productId);
          if (foundIndex == -1) {
            this.cartProductIds.push(productId);
          }
          else {
            this.cartProductIds.splice(foundIndex, 1);
          }
        }
      })
  }
  // clear user token from local storage - emit false to change navigation header  
  // navigate to login page
  ToLoginPage() {
    this.loginService.removeUserToken('qurba-token');
    this.loginService.isLoggedInEmiiter.next(false);
    this.router.navigate(['/auth']);

  }
  // emit searched word
  searchedWordChanged(event: any) {
    this.searchService.searchEmiiter.next(event.target.value);
  }
}
