import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-vaccine',
  templateUrl: './update-vaccine.page.html',
  styleUrls: ['./update-vaccine.page.scss'],
})
export class UpdateVaccinePage implements OnInit {

  constructor(public alertController: AlertController,private router: Router) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'You have updated number of available vaccines successfully',
      buttons: [
        {
                text: 'Okay',
                handler: () => {
                  this.router.navigateByUrl('admin');
                }
              }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
