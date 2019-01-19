import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../ui.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProfileComponent } from '../../profile/profile/profile.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private uiService: UiService,
    private router: Router,
    private fb: FormBuilder,
    public toastr: ToastrManager,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }
  login() {
    this.ngxService.start();
    this.uiService.login(this.loginForm.value)
      .subscribe(
        result => {
          if (result.status_code === "notexist") {
            this.ngxService.stop();
            this.toastr.warningToastr('user not  exists.', 'Alert!');
          } else if (result.status_code === "success") {
            this.ngxService.stop();
            this.toastr.successToastr('Login Successful', 'Success!');
            this.router.navigateByUrl('/profile');
          } else if (result.status_code === "failed") {
            this.ngxService.stop();
            this.toastr.errorToastr('Login failed', 'Oops!');
          } else {
            this.ngxService.stop();
            this.toastr.errorToastr('something went wrong ', 'Oops!');
          }
        }, error => {
          this.ngxService.stop();
          this.toastr.errorToastr('something went wrong ', 'Oops!');
        })
  }
}
