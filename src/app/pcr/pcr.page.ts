import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { User } from '../user/user.model';
import { Pcr } from './pcr.model';
import { PcrService } from './pcr.service';

interface PcrData{
  id: string;
  jmbg: number;
  phone: number;
  city: string;
  result: string;
  userID: string;
}

@Component({
  selector: 'app-pcr',
  templateUrl: './pcr.page.html',
  styleUrls: ['./pcr.page.scss'],
})
export class PcrPage implements OnInit {
  public user: User;
  public pcr: Pcr;
  public pcrs: Pcr[]=[];

  constructor(private alertController: AlertController, private router: Router, private pcrService: PcrService
    ,private authService: AuthService) { }

  ngOnInit() {
    this.user=this.authService.currentUser;
    console.log(this.user);
    // this.checkResult(this.user.id);
  }

  onSignUp(signUp: NgForm) {
    if (signUp.valid) {
      this.pcrService.addSigned(signUp.value.jmbg,signUp.value.phone,signUp.value.city,'none').subscribe((res)=>{
        console.log(res);
      });
      this.presentAlert();
      signUp.reset();
    }
  }

  checkResult(id: string){
    // this.pcrService.getSigned().subscribe((pcrs: PcrData[])=>{
    //   this.pcrs=pcrs;
    //   console.log(this.pcrs);
    //   this.pcrService.checkResult(id,this.pcrs);
    // });
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      message: 'You signed up for a PCR test successfully',
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
