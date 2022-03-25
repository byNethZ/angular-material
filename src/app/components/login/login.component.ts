import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    const user = this.form.value.usuario;
    const password = this.form.value.password;
    
    if(user === 'bynethz@gmail.com' && password === '12345678'){
      //redirect dashboard
      this.fakeLoading();
    } else{
      //user data incorrect
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o password incorrectos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{

      this._router.navigate(['/dashboard']);

      this.loading = false;
    }, 1500)
  }

}
