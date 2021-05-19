import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { VaccineService } from './vaccine.service';
import { VaccineNumber } from './vaccine-number.model';
import { AlertController } from '@ionic/angular';

interface VaccineNo{
  id: string;
  pfizer: number;
  sputnik: number;
  sinopharm: number;
  astra: number;
  moderna: number;
}


@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.page.html',
  styleUrls: ['./vaccine.page.scss'],
})
export class VaccinePage implements OnInit {

  vaccineNum: VaccineNumber;

  constructor(private alertController: AlertController, private router: Router, private service: VaccineService) { }

  ngOnInit() {
    this.service.getVaccines().subscribe((vaccineNum: VaccineNo)=>{
      this.vaccineNum=vaccineNum;
      console.log(this.vaccineNum);
    });
  }

  onSignUp(signUp: NgForm) {
    console.log(signUp);
    if (signUp.valid) {
      this.service.addSigned(signUp.value.jmbg,signUp.value.phone,signUp.value.vaccine,'none').subscribe((res)=>{
        console.log(res);
      });
      this.router.navigateByUrl('/user');
    }
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      message: 'You signed up for a vaccine successfully',
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
