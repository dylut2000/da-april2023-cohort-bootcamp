import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/data-type';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product?: Product;

  constructor(public cartService: CartService) {}

  removeFromCard() {
    if (this.product) {
      this.cartService.removeFromCard(this.product?.id);
    }
  }
}
