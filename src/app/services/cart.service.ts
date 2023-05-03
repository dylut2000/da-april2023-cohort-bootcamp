import { Injectable } from '@angular/core';
import { Product } from '../types/data-type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];

  constructor() {}

  addToCard(product: Product) {
    this.cartProducts.push(product);
  }

  getTotal(): number {
    let total = 0;

    for (let i = 0; i < this.cartProducts.length; i++) {
      total += this.cartProducts[i].price;
    }
    return total;
  }

  removeFromCard(productId: number) {
    this.cartProducts = this.cartProducts.filter(product => product.id !== productId)
  }
}
