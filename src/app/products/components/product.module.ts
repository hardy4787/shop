import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../services/products.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
