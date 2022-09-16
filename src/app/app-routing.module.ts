import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"welcome",component:WelcomeComponent},
  {path:"accessdenied",component:AccessdeniedComponent},
  {path:"",redirectTo:"welcome",pathMatch:"full"},
  {path:"**",redirectTo:"welcome",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
