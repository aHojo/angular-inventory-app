import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /**
   * @input productList - the Product[] passed to us
   */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - outputs the current Product whenever it is clicked
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() { 
    this.productList = [];
    this.onProductSelected = new EventEmitter();
    this.currentProduct = new Product("", "", "", [], 0);

  }

  ngOnInit(): void {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
