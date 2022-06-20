import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private _accountService: AccountService,
    private _route: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email : [''],
      password: ['']
    })

  }

  login(login: any) {
    this._accountService.login().subscribe( (res) => {
      const chkuser = res.find( (value:any) => {
        return login.email == value.email && login.password == value.password;
      });

      if(chkuser) {
        this._route.navigate(['landing']);
      } else {
        alert("Something Went Wrong");
      }
    });
  }

}
