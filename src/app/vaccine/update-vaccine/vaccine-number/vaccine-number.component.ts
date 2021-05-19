import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { VaccineNumber } from '../../vaccine-number.model';
import { VaccineService } from '../../vaccine.service';

interface VaccineNo{
  id: string;
  pfizer: number;
  sputnik: number;
  sinopharm: number;
  astra: number;
  moderna: number;
}

@Component({
  selector: 'app-vaccine-number',
  templateUrl: './vaccine-number.component.html',
  styleUrls: ['./vaccine-number.component.scss'],
})
export class VaccineNumberComponent implements OnInit {

  @Input() vaccineNum: VaccineNumber={id:'d',pfizer: 1,sputnik: 2,sinopharm: 3,astra: 4,moderna:6};


  constructor( private alertController: AlertController, private router: Router, private service: VaccineService) {
  }

  ngOnInit() {

  }

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

  onUpdate(update: NgForm){
    console.log(update.value);
    if (update.valid) {
      this.service.addVaccines(update.value.pfizer,update.value.sputnik,update.value.sinopharm,update.value.astra,update.value.moderna)
      .subscribe((res)=>{
        console.log(res);
      });
      this.router.navigateByUrl('/admin');
    }
  }
}
