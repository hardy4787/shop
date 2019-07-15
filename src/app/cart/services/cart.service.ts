import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private purchasedProducts: Array<Product> = [];

  private channel = new BehaviorSubject<Array<Product>>(this.purchasedProducts);
  channel$ = this.channel.asObservable();

  setPurchases(products: Array<Product>): void {
    this.purchasedProducts = JSON.parse(JSON.stringify(products));
    this.channel.next(this.purchasedProducts);
  }
}
