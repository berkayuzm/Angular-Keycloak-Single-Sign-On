import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private oauthService:OAuthService,
    private _router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var hasIdToken=this.oauthService.hasValidIdToken();
      var hasAccessToken=this.oauthService.hasValidAccessToken()
      if(hasAccessToken&&hasIdToken){
        
        
        return true;
      }
      else{
        this._router.navigate(["/accessdenied"])
        return false;
      }
  }
  
}
