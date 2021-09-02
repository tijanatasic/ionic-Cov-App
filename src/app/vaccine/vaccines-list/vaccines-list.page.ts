import { HttpClient } from '@angular/common/http';
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
  userId: string;
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
    this.vaccines.forEach(element => {
      this.service.updateVaccines(element);
    });
    await alert.present();
    this.vaccines.forEach(element => {
      if(element.dose==='Both'){
        this.service.deleteVaccinated(element);
      }
    });
  }

  ngOnInit() {
    this.service.getSigned().subscribe((vaccines: VaccineData[])=>{
      this.vaccines=vaccines;
    });
  }
}
