import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Vaccine } from '../vaccine.model';
import { VaccineService } from '../vaccine.service';

interface VaccineData{
  id: string;
  jmbg: number;
  phone: number;
  vaccine: string;
  dose: string;
}

@Component({
  selector: 'app-vaccines-list',
  templateUrl: './vaccines-list.page.html',
  styleUrls: ['./vaccines-list.page.scss'],
})
export class VaccinesListPage implements OnInit {

  vaccines: Vaccine[];

  constructor(public alertController: AlertController,private router: Router, private service: VaccineService) {
    this.vaccines=this.service.vaccines;
   }

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
    this.service.getSigned().subscribe((vaccines: VaccineData[])=>{
      this.vaccines=vaccines;
    });
  }
}
