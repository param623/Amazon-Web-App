import { Component, OnInit } from '@angular/core';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: number = 0;
  products: Product[] = [];
  searchValue: string = ''
  filteredProducts: Product[] = [];
  constructor(
    public _shoppingCartItemsService: ShoppingCartItemsService,
    private _route: Router,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  landingPage() {
    this._route.navigate(['']);
  }

  cartPage() {
    this._route.navigate(['checkout']);
  }

  filterProducts( seach: any ) {
    this._productService.filterProduct(this.searchValue).subscribe( res =>{
      this._productService.updateProduct.emit(res);
    }, err => {
      alert("Not Found");
    });
  }

  login() {
    this._route.navigate(['signUp']);
  }

  logOut() {
    this._route.navigate(['login']);
    window.localStorage.setItem("user", '');
  }
}
