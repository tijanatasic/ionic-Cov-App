import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pcr',
  templateUrl: './pcr.page.html',
  styleUrls: ['./pcr.page.scss'],
})
export class PcrPage implements OnInit {

  phoneNumber=0;
  jmbg=0;
  city=null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(signUp: NgForm) {
    console.log(signUp);
    if (signUp.valid) {
      this.phoneNumber=signUp.value.phone;
      this.jmbg=signUp.value.jmbg;
      this.city=signUp.value.city;
      this.authService.logIn();
      this.router.navigateByUrl('/user');
    }
    console.log(this.phoneNumber);
    console.log(this.jmbg);
    console.log(this.city);

  }
}
