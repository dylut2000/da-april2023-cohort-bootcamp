import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/data-type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  // track products subscription
  productsSubscription?: Subscription;

  products: Product[] = [];

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsSubscription = this.productService
      .getAllProducts()
      .subscribe((data) => {
        this.products = data.products;
        // console.log(this.products);
      });
  }

  ngOnDestroy(): void {
    // unsubscribe to avoid memory leak
    this.productsSubscription?.unsubscribe();
  }
}
