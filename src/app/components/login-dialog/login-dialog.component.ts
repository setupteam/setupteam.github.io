import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new ErrorStateMatcher();

  hide = true;

  constructor(
    private authS:AuthService, 
    @Inject(MAT_DIALOG_DATA) public data: any){}

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  tryToLogin(){
    this.authS.login({
      email: this.emailFormControl.value as string, 
      password: this.passwordFormControl.value as string
    }).subscribe(res=>{
      if(res.isOK){
        this.data.callbacks.onSuccess(res.token)
      }else{
        
      }
      console.log(res)
    })
  }
}
