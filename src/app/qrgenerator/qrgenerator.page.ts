import { Component, OnInit } from '@angular/core';

import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";

import { AuthService } from '../auth.service';
import { Pcr } from '../pcr/pcr.model';
import { PcrService } from '../pcr/pcr.service';
import { User } from '../user/user.model';
import { Vaccine } from '../vaccine/vaccine.model';
import { VaccineService } from '../vaccine/vaccine.service';


interface PcrData{
  id: string;
  jmbg: number;
  phone: number;
  city: string;
  result: string;
  userID: string;
}

interface VaccineData{
  id: string;
  jmbg: number;
  phone: number;
  vaccine: string;
  dose: string;
  userId: string;
}

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.page.html',
  styleUrls: ['./qrgenerator.page.scss'],
})
export class QrgeneratorPage implements OnInit {

  public user: User;

  vaccines: Vaccine[];
  vaccinated: Vaccine[];

  public pcrs: Pcr[]=[];
  public element='';

  public gotVac='';

  public vacc='';


  createdCode=null;
  scannedCode=null;

  ngOnInit() {
    this.user=this.authService.currentUser;
    console.log(this.user.id);

    this.vacService.getSigned().subscribe((vaccines: VaccineData[])=>{
      this.vaccines=vaccines;
    });

    this.vacService.getVaccinated().subscribe((vaccinated: VaccineData[])=>{
      this.vaccinated=vaccinated;
    });
  }

  constructor(private scanner: BarcodeScanner,private authService: AuthService, private pcrService: PcrService, private vacService: VaccineService) {
  }


  generateBarCode() {
    this.pcrService.getSigned().subscribe((pcrs: PcrData[])=>{
    this.pcrs=pcrs;
    this.element=this.pcrService.checkResult(this.user.id,this.pcrs);
    

      this.vaccinated.forEach(element => {
        if(element.userId==this.user.id){
          this.vacc=". Vaccinated with both doses of "+element.vaccine[0]+".";
        }
      });

      this.vaccines.forEach(element => {
        if(element.userId==this.user.id && element.dose=="First"){
          this.vacc=". Vaccinated with first dose of "+element.vaccine[0]+".";
        }
      });

      this.vaccines.forEach(element => {
        if(element.userId==this.user.id && element.dose=="none"){
          this.vacc=". Not vaccinated yet.";
        }
      });

      if(this.vacc==''){
        this.vacc='. You did not sign for vaccine.'
      }

      this.createdCode="Scanned results of person with email: "+this.user.email+". Last PCR test result: "+this.element+this.vacc;
    });
  }

  

  scanCode(){
    this.scanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    })
  }

}
