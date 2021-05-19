import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PcrService } from './pcr.service';

@Component({
  selector: 'app-pcr',
  templateUrl: './pcr.page.html',
  styleUrls: ['./pcr.page.scss'],
})
export class PcrPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private service: PcrService) { }

  ngOnInit() {
  }

  onSignUp(signUp: NgForm) {
    console.log(signUp);
    if (signUp.valid) {
      this.service.addSigned(signUp.value.jmbg,signUp.value.phone,signUp.value.city,'none').subscribe((res)=>{
        console.log(res);
      });
      this.router.navigateByUrl('/user');
    }
  }
}
