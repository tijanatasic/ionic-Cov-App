import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { VaccineNumber } from './vaccine-number.model';
import {Vaccine} from './vaccine.model';

interface VaccineData{
  id: string;
  jmbg: number;
  phone: number;
  vaccine: string;
  dose: string;
}

interface VaccineNo{
  id: string;
  pfizer: number;
  sputnik: number;
  sinopharm: number;
  astra: number;
  moderna: number;
}


@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  postID;


  vaccines: Vaccine[];
  vaccineNum: VaccineNumber[];

  constructor(private http: HttpClient) { }



  addSigned(jmbg: number, phone: number, vaccine: string, dose: string){
    return this.http.post<{jmbg: number}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/vaccine.json',{
      jmbg, phone, vaccine,dose});
  }

  getSigned(){
    return this.http.get<{[key: string]: VaccineData}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/vaccine.json')
    .pipe(map((res)=>{
      const vaccines: VaccineData[]=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          vaccines.push({
            id: key,
            jmbg: res[key].jmbg,
            phone: res[key].phone,
            vaccine: res[key].vaccine,
            dose: res[key].dose
          });
        }
      }
      return vaccines;
    }));
  }

  addVaccines(pfizer: number, sputnik: number, sinopharm: number, astra: number, moderna: number){
    return this.http.post<{key: string}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/vaccineNumber.json',{
      pfizer, sputnik, sinopharm,astra,moderna});
  }

  getVaccines(){
    return this
    .http.get<{[key: string]: VaccineNo}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/vaccineNumber.json')
    .pipe(map((res)=>{
      const numbers: VaccineNo[]=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          numbers.push({
            id: key,
            pfizer: res[key].pfizer,
            sputnik: res[key].sputnik,
            sinopharm: res[key].sinopharm,
            astra: res[key].astra,
            moderna: res[key].moderna
          });
        }
      }
      return numbers[numbers.length-1];
    }));
  }

  updateVaccines(element: Vaccine){
    return this.http.put<any>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/vaccine/'
    +element.id+'.json'
    ,JSON.stringify(element)).subscribe();
  }

  deleteVaccinated(element: Vaccine){
    console.log(element);
    return this.http.delete<void>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/vaccine/'
    +element.id+'.json').subscribe();
  }
}
