import { Component , OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogIn(logInForm: NgForm) {
    console.log(logInForm);
    if (logInForm.valid) {
      this.authService.logIn();
      this.router.navigateByUrl('/user');
    }
  }
}
