import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PcrService } from './pcr.service';

@Component({
  selector: 'app-pcr',
  templateUrl: './pcr.page.html',
  styleUrls: ['./pcr.page.scss'],
})
export class PcrPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router, private service: PcrService) { }

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

  async presentAlert(){
    const alert = await this.alertController.create({
      message: 'You signed up for a PCR test successfully',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          this.router.navigateByUrl('user');
          }
        }
      ]
    });
    await alert.present();
  }

}
