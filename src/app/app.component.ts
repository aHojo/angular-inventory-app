import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        29.99
      ),
      new Product(
        "NICE CAP",
        "A Nice Cap ",
        "assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        69.99
      ),
      new Product(
        "NICE BEANIE",
        "A Nice Beanie",
        "assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        49.99
      ),
    ];
  }

productWasSelected(product: Product) {
  console.log('Product Clicked ', product);
}


}
