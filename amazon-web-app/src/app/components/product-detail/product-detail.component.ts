import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct!: Product;
  currentImage: string = '';
  currentMRP : number = 0;
  discountPrice: number = 0;
  constructor() { }

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

}