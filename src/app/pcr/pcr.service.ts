import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Pcr} from './pcr.model';

interface PcrData{
  id: string;
  jmbg: number;
  phone: number;
  city: string;
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class PcrService {

  pcrs: Pcr[];

  constructor(private http: HttpClient) { }

  addSigned(jmbg: number, phone: number, city: string,result: string){
    return this.http.post<{jmbg: number}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/pcr.json',{
      jmbg, phone, city,result});
  }

  getSigned(){
    return this.http.get<{[key: string]: PcrData}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/pcr.json')
    .pipe(map((res)=>{
      const pcrs: PcrData[]=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          pcrs.push({
            id: key,
            jmbg: res[key].jmbg,
            phone: res[key].phone,
            city: res[key].city,
            result: res[key].result
          });
        }
      }
      return pcrs;
    }));
  }

  updateSigned(){

  }
}
