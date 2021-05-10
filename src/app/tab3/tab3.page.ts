import { Component ,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private authService: AuthService, private router: Router) { }

  onLogInAd(logInAdForm: NgForm) {
    console.log(logInAdForm);
    if (logInAdForm.valid) {
      this.authService.logIn();
      this.router.navigateByUrl('/admin');
    }
  }
}
