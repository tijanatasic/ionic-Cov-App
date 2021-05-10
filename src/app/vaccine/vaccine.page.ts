import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.page.html',
  styleUrls: ['./vaccine.page.scss'],
})
export class VaccinePage implements OnInit {

  phoneNumber=0;
  jmbg=0;
  vaccine=null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(signUp: NgForm) {
    console.log(signUp);
    if (signUp.valid) {
      this.phoneNumber=signUp.value.phone;
      this.jmbg=signUp.value.jmbg;
      this.vaccine=signUp.value.vaccine;
      this.authService.logIn();
      this.router.navigateByUrl('/user');
      signUp.reset();
    }
    console.log(this.phoneNumber);
    console.log(this.jmbg);
    console.log(this.vaccine);
  }
}
