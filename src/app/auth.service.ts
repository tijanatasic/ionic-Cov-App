import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {User} from '../app/user/user.model';
import {map, tap} from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

interface UserData {
  name?: string;
  surname?: string;
  email: string;
  gender?: string;
  contact?: number;
  password: string;
  userId: string;
}

interface CovidInfo{
  infected: number;
  deceased: number;
  tested: number;
  hospitalized: number;
  patientsOnVentilators: number;
  tested24hours: number;
  infected24hours: number;
  deceased24hours: number;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public currentUser=null;
  private _user = new BehaviorSubject<User>(null);
  private _isUserAuthenticated = false;

  public covidAPI='https://api.apify.com/v2/key-value-stores/aHENGKUPUhKlX97aL/records/LATEST?disableRedirect=true';
  public covidInfo;

  constructor(private http: HttpClient) { }

  get isUserAuthenticated() {
    return this._user.asObservable().pipe(
      map((user) => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }


  get usersId(){
    return this._user.asObservable().pipe(
      map((user) => {
        if (user) {
          return user.id;
        } else {
          return '';
        }
      })
    );
  }


  register(user: UserData) {
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {name: user.name, surname: user.surname, email: user.email, gender: user.gender, contact: user.contact
        , password: user.password, returnSecureToken: true})
      .pipe(
        tap((userData) => {
          const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
          const user1 = new User(userData.localId, userData.email, userData.idToken, expirationTime);
          this._user.next(user1);
        })
      );
  }

  logIn(user: UserData) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment
    .firebaseAPIKey}`,
      {email: user.email, password: user.password, returnSecureToken: true})
      .pipe(
        tap((userData) => {
          this._isUserAuthenticated = true;
          const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
          const user1 = new User(userData.localId, userData.email, userData.idToken, expirationTime);
          user1.isAdmin=false;
          console.log(user1);
          this.currentUser=user1;
          this._user.next(this.currentUser);
        })
      );
  }

  logOut() {
    this.currentUser=null;
    // this._user.next(null);
  }

  getCovidInfo(){
    return this.http.get<{[key: string]: CovidInfo[]}>(this.covidAPI)
    .pipe(map((res)=>{
      this.covidInfo=res;
      return this.covidInfo;
    }));
  }
}

