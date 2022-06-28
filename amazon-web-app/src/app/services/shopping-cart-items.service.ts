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

  deleteProduct = ( product: Product ) => {
    let items = this.getCartItem();

    if(items) {
      const deleteditem = items.find( (item : any) => {
        return item.id === product.id;
      });
      if(deleteditem) {
        let index = items.indexOf(deleteditem);
        items.splice(index, 1);
        window.localStorage.setItem('shopping_cart', JSON.stringify(items));
        this.getTotal();
        this.getCartLength();
      }
    }
  }
}
