import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../sso-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string=" ";
  constructor(private oauthService:OAuthService) {
   }

  ngOnInit(): void {
    console.log("HOME İNİT")
    this.configureSingleSignOn();
    const userClaims:any=this.oauthService.getIdentityClaims();
    this.name=userClaims.name ?userClaims.name:"";
    console.log("HOME İNİ2")

  }
  configureSingleSignOn():void{
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler=new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

}
