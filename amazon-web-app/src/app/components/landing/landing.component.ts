import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images: any = ["landing_1", "landing_2", "landing_3", "landing_4", "landing_5", "landing_6", "landing_7", "landing_8"];
  products!: Product[];
  selectedProduct!: Product;
  userId?: string | null
  showProductDetailPage: boolean = false;
  constructor(
    private _productService: ProductService,
    private _shoppingCartItemsService: ShoppingCartItemsService,
    private _route: Router,
    private _accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getProducts();
  }

  getUserId() {
    if(this._accountService.getUserId != null) {
      this.userId = this._accountService.getUserId();
    } else {
      this.userId = null
      this._route.navigate(['signUp']);
    }
  }

  getProducts() {
    this._productService.getProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    }, err => {
      console.log("Something went wrong.")
    });
  }

  productDetail(product: Product) {
    this._route.navigate(['product', product.id])
  }

  addToCart(product: Product) {
    this._shoppingCartItemsService.addCartItem(product);
  }

  back() {
    this.showProductDetailPage = !this.showProductDetailPage;
  }
}
