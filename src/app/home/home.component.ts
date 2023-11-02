import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginDialogComponent } from '../components/login-dialog/login-dialog.component';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { IUser } from '../interfaces/User.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user?:IUser

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router:Router,
    private userS:UsersService,
    private authS:AuthService
  ) { }

  ngOnInit(): void {
    this.userS.getCurrentUser().subscribe({
      next: user => this.user = user,
      error: () =>{}
    })
  }

  openSnackBar() {
    this.snackBar.open("Ni nosotros sabemos!", 'X');
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
        callbacks: {
          onSuccess: ()=>{
            dialogRef.close()
            this.router.navigate(["/dashboard"])
          }
        }
      }
    });
  }

  logout(){
    this.authS.logout().subscribe(res => {
      if(res.isOK){
        this.userS.getCurrentUser().subscribe({
          next: user => this.user = user,
          error: () => this.user = undefined
        })
      }
    })
  }
}
