import { Component, OnInit } from '@angular/core';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: number = 0;
  constructor(
    public _shoppingCartItemsService: ShoppingCartItemsService,
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  landingPage() {
    this._route.navigate(['']);
  }

  cartPage() {
    this._route.navigate(['checkout']);
  }
}
