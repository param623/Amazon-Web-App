import { Component, OnInit } from '@angular/core';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any = [];
  constructor(
    public _shoppingCartItemsService: ShoppingCartItemsService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.cartItems = this._shoppingCartItemsService.getCartItem();
    if(this.cartItems) {
    }
  }

  back() {
    this._route.navigate(['landing']);
  }
}
