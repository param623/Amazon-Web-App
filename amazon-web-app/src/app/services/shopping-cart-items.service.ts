import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartItemsService {

  shoppingCartItems: Product[] = [];
  constructor() { }

  addCartItem = ( product: any ) => {
    let items = this.getCartItem();
    // window.localStorage.setItem('shopping_cart', '');
    if(items && items != null) {
      items.push(product);
      window.localStorage.setItem('shopping_cart', JSON.stringify(items));
    } else {
      this.shoppingCartItems.push(product);
      window.localStorage.setItem('shopping_cart', JSON.stringify(this.shoppingCartItems));
    }
  }

  getCartItem  = () => {
    let items = window.localStorage.getItem('shopping_cart');
    return JSON.parse(items!);
  }

  getCartLength = () => {
    let items = this.getCartItem();
    return items ? this.getCartItem().length : 0; 
  }

  getTotal = () => {
    let items = window.localStorage.getItem('shopping_cart');
    let shopping_items = JSON.parse(items!);
    let total = 0;
    
    shopping_items.forEach( (product: any) => {
      total += product.price;
    });

    return total;
  }
}
