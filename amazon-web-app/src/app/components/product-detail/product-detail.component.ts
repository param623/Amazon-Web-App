import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct!: Product;
  @Output() goBack: EventEmitter<any>= new EventEmitter();
  currentImage: string = '';
  currentMRP : number = 0;
  discountPrice: number = 0;
  shoppingCartItems: Product[] = [];
  constructor(
    private _shoppingCartItemsService: ShoppingCartItemsService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.selectedProduct);
    this.currentImage = this.selectedProduct.images[0];

    this.currentMRP = this.selectedProduct.price + ((this.selectedProduct.price * this.selectedProduct.discountPercentage) / 100);
    this.currentMRP = +this.currentMRP.toFixed(2);

    this.discountPrice = this.currentMRP - this.selectedProduct.price;
    this.discountPrice = +this.discountPrice.toFixed(2);
  }

  onHoverImage(image: string) {
    this.currentImage = image;
  }

  addToCart() {
    this._shoppingCartItemsService.addCartItem(this.selectedProduct);
    this._route.navigate(['checkout']);
  }

  cartPage() {
    this._route.navigate(['checkout']);
  }

  back() {
    this.goBack.emit();
  }

}