import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor(private authService: AuthService,private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm) {
    console.log(registerForm);
    if (registerForm.valid) {
      this.loadingCtrl
        .create({ message: 'Registering ... ' })
        .then((loadingEl) => {
          loadingEl.present();

          this.authService.register(registerForm.value).subscribe(resData => {
            console.log('registracija uspesna');
            console.log(resData);
            loadingEl.dismiss();
            this.router.navigateByUrl('/tabs/tab2');
          });
        });
    }
  }
}
