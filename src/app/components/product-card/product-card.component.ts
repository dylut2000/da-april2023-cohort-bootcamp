import { Component, Input } from '@angular/core';
import { Product } from '../../types/data-type';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product?: Product;

  constructor(public cartService: CartService) {}

  addToCard() {
    if (this.product) {
      this.cartService.addToCard(this.product);
    }
  }
}
