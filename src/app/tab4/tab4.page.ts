import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor(private authService: AuthService,private loadingCtrl: LoadingController, private router: Router, 
    private alertController: AlertController) { }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm) {
    console.log(registerForm);
    if(registerForm.value.email.includes('@covid')){
        this.presentAdminErrorAlert();
        registerForm.reset();
        registerForm.invalid;
    }else{
    if (registerForm.valid) {
      this.loadingCtrl
        .create({ message: 'Registering ... ' })
        .then((loadingEl) => {
          loadingEl.present();
          this.authService.register(registerForm.value).subscribe(resData => {
            if (resData.email.includes('@covid')) {
              loadingEl.dismiss();
              this.presentAdminErrorAlert();
              registerForm.reset();
            }else{
              console.log('registracija uspesna');
              console.log(resData);
              loadingEl.dismiss();
              this.router.navigateByUrl('/tabs/tab2');
            }
          }, (error)=>{
            loadingEl.dismiss();
            this.presentErrorAlert();
            registerForm.reset();
          });
        });
    }
  }
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      message: 'Someone already has that username. Please enter something else.',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          this.router.navigateByUrl('/tabs/tab4');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAdminErrorAlert() {
    const alert = await this.alertController.create({
      message: 'You are not alowed to register with @covid email. Please enter something else.',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          this.router.navigateByUrl('/tabs/tab4');
          }
        }
      ]
    });
    await alert.present();
  }
}
