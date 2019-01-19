import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUiLoaderModule
  ],
  entryComponents: [
    LoginComponent
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, ContactUsComponent, HomeComponent, LoginComponent, SignUpComponent, AboutUsComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
