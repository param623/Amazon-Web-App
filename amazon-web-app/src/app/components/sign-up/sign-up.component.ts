import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm !: FormGroup;
  constructor(
    private _accountService: AccountService,
    private http: HttpClient,
    private route: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      name: [''],
      phoneNumber: [''],
      email : [''],
      password: ['']
    })

  }

  signUp( form: User) {
    this._accountService.signUp(form).subscribe( res=> {
      this.route.navigate(['login']);
    },err=> {
      alert("Something Went Wrong");
    });
  }
}
