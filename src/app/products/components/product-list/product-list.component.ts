import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  @Input()
  products: Array<Product>;

  @Output()
  pushToBasket: EventEmitter<Product> = new EventEmitter();

  onPushToBasket(product: Product): void {
    this.pushToBasket.emit(product);
  }

}
