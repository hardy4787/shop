import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  productsBasket: Array<Product> = [];
  products: Array<Product>;
  basketSize: number = 0;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onPushToBasket(product: Product): void {
    this.productsBasket.push(product);
    this.basketSize++;
  }

  onBuy(): void {
    console.log('products purchased');
    this.cartService.setPurchases(this.productsBasket);
  }

}
