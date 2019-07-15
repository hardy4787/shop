import { Injectable } from '@angular/core';

import { Product } from 'src/app/products/models/product';
import { Category } from 'src/app/products/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<Product> {
    return [
      {
        name: 'StarCraft',
        description: 'Good game!',
        price: 1000,
        category: Category.Games,
        isAvailable: true
      },
      {
        name: 'Napoleon Hill : Think and grow rich!',
        description: 'Good book!',
        price: 500,
        category: Category.Books,
        isAvailable: true
      },
      {
        name: 'HP : Pavilion 7550',
        description: 'Good notebook!',
        price: 20000,
        category: Category.Notebooks,
        isAvailable: true
      }
    ];
  }
}
