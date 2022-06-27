import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.css']
})
export class CheckoutProductComponent implements OnInit {
  @Input() checkout_products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
