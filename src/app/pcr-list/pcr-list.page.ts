import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pcr-list',
  templateUrl: './pcr-list.page.html',
  styleUrls: ['./pcr-list.page.scss'],
})
export class PcrListPage implements OnInit {
  constructor(public alertController: AlertController,private router: Router) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'You have successfully added results of PCR tests',
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
