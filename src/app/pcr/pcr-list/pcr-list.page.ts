import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Pcr } from '../pcr.model';
import { PcrService } from '../pcr.service';

interface PcrData{
  id: string;
  jmbg: number;
  phone: number;
  city: string;
  result: string;
}

@Component({
  selector: 'app-pcr-list',
  templateUrl: './pcr-list.page.html',
  styleUrls: ['./pcr-list.page.scss'],
})

export class PcrListPage implements OnInit {
  pcrs: Pcr[]=[{id: 'a1', jmbg: 121412, phone: 13312, city: 'Beograd',result: 'none'}];
  constructor(public alertController: AlertController,private router: Router, private service: PcrService) { }
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
      this.service.getSigned().subscribe((pcrs: PcrData[])=>{
        this.pcrs=pcrs;
      });
  }
}
