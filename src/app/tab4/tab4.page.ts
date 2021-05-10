import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm) {
    console.log(registerForm);
    if (registerForm.valid) {
      this.authService.logIn();
      this.router.navigateByUrl('/tabs/tab2');
    }
  }
}
