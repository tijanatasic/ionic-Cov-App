import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { VaccineService } from '../vaccine.service';
import { VaccineNumber } from '../vaccine-number.model';

interface VaccineNo{
  id: string;
  pfizer: number;
  sputnik: number;
  sinopharm: number;
  astra: number;
  moderna: number;
}

@Component({
  selector: 'app-update-vaccine',
  templateUrl: './update-vaccine.page.html',
  styleUrls: ['./update-vaccine.page.scss'],
})
export class UpdateVaccinePage implements OnInit {

  vaccineNum: VaccineNumber;


  constructor(public alertController: AlertController,private router: Router, private service: VaccineService) {
    // this.vaccineNum=this.service.vaccineNum;
  }


  ngOnInit() {
    this.service.getVaccines().subscribe((vaccineNum: VaccineNo)=>{
      this.vaccineNum=vaccineNum;
      console.log(this.vaccineNum);
    });
  }
}
