import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images: any = ["landing_1", "landing_2", "landing_3", "landing_4", "landing_5", "landing_6", "landing_7", "landing_8"];
  products!: Product[];
  selectedProduct!: Product;
  showProductDetailPage: boolean = false;
  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(res => {
      this.products = res.products;
      console.log(this.products);
    }, err => {
      console.log("Something went wrong.")
    });
  }

  productDetail(product: Product) {
    this.showProductDetailPage = !this.showProductDetailPage;
    this.selectedProduct = product;
  }

}
