import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  pathAPI = "http://localhost:3000/products";
  constructor(
    private http : HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.pathAPI);
  }

  getProductById(id : number):Observable<Product> {
    return this.http.get<any>(this.pathAPI + "/" + id)
  }
}
