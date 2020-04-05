import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

constructor(private AuthService: AuthService,private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{


   if(!this.AuthService.userIsauth){

    this.router.navigate(['/auth']);
   }
   return this.AuthService.userIsauth;
    
  };

}
