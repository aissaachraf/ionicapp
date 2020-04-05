import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private _userIsauth = true;
get userIsauth(){

  return this._userIsauth;
}
  constructor() { }
login(){

this._userIsauth = true;

}

logout(){

this._userIsauth = false;

}

}
