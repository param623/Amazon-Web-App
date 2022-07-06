import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user!: User;
  pathApi:  string = "http://localhost:3000/";
  constructor(
    private http: HttpClient
  ) { }

  login(): Observable<any>{
    return this.http.get(this.pathApi + "users");
  }

  signUp(body: User): Observable<any> {
    return this.http.post<any>(this.pathApi + "users" , body);
  }

}
