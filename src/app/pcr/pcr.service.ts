import { Injectable, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Pcr} from './pcr.model';
import { AuthService } from '../auth.service';

interface PcrData{
  id: string;
  jmbg: number;
  phone: number;
  city: string;
  result: string;
  userID: string;
}

@Injectable({
  providedIn: 'root'
})

export class PcrService {

  resultUser;
  pcrs: Pcr[];

  constructor(private http: HttpClient, private authService: AuthService) { }

  addSigned(jmbg: number, phone: number, city: string, result: string){

    this.authService.usersId.subscribe((userID)=>{
      console.log(userID);
      this.http.post<{jmbg: number}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/pcr.json',{
      jmbg, phone, city, result, userID}).subscribe();
    });
  }

  getSigned(){
    return this.http.get<{[key: string]: PcrData}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/pcr.json')
    .pipe(map((res)=>{
      console.log(res);
      const pcrs: PcrData[]=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          pcrs.push(
            new Pcr(key,res[key].jmbg,res[key].phone,res[key].city,res[key].result,res[key].userID)
          );
        }
      }
      return pcrs;
    }));
  }

  updateSigned(element: Pcr){
    return this.http.put<any>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/pcr/'
    +element.id+'.json'
    ,JSON.stringify(element)).subscribe();
  }

  checkResult(id: string, pcrs1:  Pcr[]): string{
    if(pcrs1.length===0){
      this.resultUser = 'There are no results for your PCR test';
    }
    pcrs1.forEach(element => {
      if(id===element.userID && element.result!=='none'){
        this.resultUser = element.result;
      }else {
        this.resultUser = 'There are no results for your PCR test';
      }
    });
    console.log(this.resultUser);
    return this.resultUser;
  }
}
