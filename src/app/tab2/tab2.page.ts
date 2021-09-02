import { Component , OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private authService: AuthService,private loadingCtrl: LoadingController, private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  onLogIn(logInForm: NgForm) {
    console.log(logInForm);
    if (logInForm.valid) {
      this.loadingCtrl
        .create({ message: 'Logging in user ... ' })
        .then((loadingEl) => {
          loadingEl.present();

          this.authService.logIn(logInForm.value).subscribe(resData => {
            console.log(resData.email.includes('@covid'));
            if (resData.email.includes('@covid')) {
              console.log('prijava neuspesna');
              console.log(resData);
              loadingEl.dismiss();
              this.router.navigateByUrl('/tabs/tab3');
            }
            else {
              console.log('prijava uspesna');
              console.log(resData);
              loadingEl.dismiss();
              this.router.navigateByUrl('/user');
              logInForm.reset();
            }
          }, (error) => {
            loadingEl.dismiss();
            this.presentErrorAlert();
            logInForm.reset();
           });
        });
    }
  }


  async presentErrorAlert() {
    const alert = await this.alertController.create({
      message: 'Wrong email or password.',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          this.router.navigateByUrl('/tabs/tab2');
          }
        }
      ]
    });
    await alert.present();
  }
}
