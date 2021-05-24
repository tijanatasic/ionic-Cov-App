import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, switchMap, take} from 'rxjs/operators';
import {Pcr} from './pcr.model';
import { AuthService } from '../auth.service';

interface PcrData{
  id: string;
  jmbg: number;
  phone: number;
  city: string;
  result: string;
  // usersId: string;
}

@Injectable({
  providedIn: 'root'
})

export class PcrService {

  public result='';
  pcrs: Pcr[];

  constructor(private http: HttpClient, private authService: AuthService) { }

  addSigned(jmbg: number, phone: number, city: string,result: string){
    return this.authService.usersId.pipe(take(1),(usersId=>{
      console.log(usersId);
      return this.http.post<{jmbg: number}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/pcr.json',{
        jmbg, phone, city, result});
    }));
    // return this.http.post<{jmbg: number}>('https://covapp-ionic-default-rtdb.europe-west1.firebasedatabase.app/pcr.json',{
    //   jmbg, phone, city,result});
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
            // usersId: res[key].usersId
          });
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

  checkResult(id: string, pcrs1:  Pcr[]){
    // console.log(pcrs1);
    // pcrs1.forEach(element => {
    //   if(id===element.userID && element.result!=='none'){
    //     console.log('usao 1');
    //     this.result= element.result;
    //   }else{
    //     console.log('usao 2');
    //     console.log(id+' '+element.userID+'  '+element.result);
    //     this.result= 'There are no results for your PCR test';
    //   }
    // });
  }
}
