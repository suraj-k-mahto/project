import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../app/ui/contact-us/contact-us.component';
import { HomeComponent } from '../app/ui/home/home.component';
import { LoginComponent } from '../app/ui/login/login.component';
import { SignUpComponent } from '../app/ui/sign-up/sign-up.component';
import { AboutUsComponent } from '../app/ui/about-us/about-us.component';
import { ProfileComponent } from '../app/profile/profile/profile.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'singUp', component: SignUpComponent },
  { path: 'aboutUs', component: AboutUsComponent },

  { path: 'contactUs', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
