import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vaccines-list',
  templateUrl: './vaccines-list.page.html',
  styleUrls: ['./vaccines-list.page.scss'],
})
export class VaccinesListPage implements OnInit {
  constructor(public alertController: AlertController,private router: Router) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'You have successfully updated given doses',
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
