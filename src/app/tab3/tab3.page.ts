import { Component ,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private authService: AuthService,private loadingCtrl: LoadingController, private router: Router) { }

  onLogInAd(logInAdForm: NgForm) {
    console.log(logInAdForm);
    if (logInAdForm.valid) {

      this.loadingCtrl
        .create({ message: 'Logging in admin... ' })
        .then((loadingEl) => {
          loadingEl.present();
          this.authService.logIn(logInAdForm.value).subscribe(resData => {
            this.authService.currentUser.isAdmin=true;
            console.log(resData.email.includes('@covid'));
            if (!resData.email.includes('@covid')) {
              console.log('prijava neuspesna');
              console.log(resData);
              loadingEl.dismiss();
              this.router.navigateByUrl('/tabs/tab2');
            }
            else {
              console.log('prijava uspesna');
              console.log(resData);
              loadingEl.dismiss();
              this.router.navigateByUrl('/admin');
              logInAdForm.reset();
            }
          });
        });
    }
  }
}
