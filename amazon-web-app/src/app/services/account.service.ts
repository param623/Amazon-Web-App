import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  pathApi:  string = "http://localhost:3000/";
  constructor(
    private http: HttpClient
  ) { }

  login(): Observable<any>{
    return this.http.get(this.pathApi + "signUp");
  }

  signUp(body: any): Observable<any> {
    return this.http.post<any>(this.pathApi + "signUp" , body);
  }
}
