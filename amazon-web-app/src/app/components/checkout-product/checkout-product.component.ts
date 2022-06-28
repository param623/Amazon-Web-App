import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.css']
})
export class CheckoutProductComponent implements OnInit {
  @Input() checkout_products: Product[] = [];
  constructor(
    private _shoppingCartItemsService : ShoppingCartItemsService
  ) { }

  ngOnInit(): void {
  }

  deleteProduct (product : Product) {
    this._shoppingCartItemsService.deleteProduct(product);
    this.checkout_products = this._shoppingCartItemsService.getCartItem();
  }
}
