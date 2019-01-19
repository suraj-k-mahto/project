import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UiService } from '../ui.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isConfirmPassword: boolean = false;
  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    public toastr: ToastrManager,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    })
    this.signUpForm.get('confirmPassword').valueChanges.subscribe(result => {
      console.log('result', result);
      let confirmPassword = this.signUpForm.get('password').value;
      if (result === confirmPassword) {
        this.isConfirmPassword = false;
      } else {
        this.isConfirmPassword = true;
      }
    })
  }

  signup() {
    this.ngxService.start();
    this.uiService.signUp(this.signUpForm.value)
      .subscribe(result => {
        console.log('sign upresult', result);
        if (result.status_code === 'uexist') {
          this.ngxService.stop();
          this.toastr.warningToastr('user already  exists.', 'Alert!');
        } else if (result.status_code === 'success') {
          this.ngxService.stop();
          this.toastr.successToastr('Registration Successful', 'Success!');
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
