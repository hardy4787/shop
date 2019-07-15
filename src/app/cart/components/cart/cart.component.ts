import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  purchasedProducts: Array<Product>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(products => {
      this.purchasedProducts = products;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
