import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { LoginDialogComponent } from '../components/login-dialog/login-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open("Ni nosotros sabemos!", 'X');
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
        callbacks: {
          onSuccess: (token:string)=>{
            const t = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBkMGU4NmJkNjQ3NDBjYWQyNDc1NjI4ZGEyZWM0OTZkZjUyYWRiNWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3QtcGFnZS0yMzU5ZCIsImF1ZCI6InN0LXBhZ2UtMjM1OWQiLCJhdXRoX3RpbWUiOjE2OTg1MzQ0MDMsInVzZXJfaWQiOiJ0eXFZTU5PV0N0UFhkd1U0V3JHNlZUOExGVjAyIiwic3ViIjoidHlxWU1OT1dDdFBYZHdVNFdyRzZWVDhMRlYwMiIsImlhdCI6MTY5ODUzNDQwMywiZXhwIjoxNjk4NTM4MDAzLCJlbWFpbCI6ImFmZWxpcGVyb3Nhc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWZlbGlwZXJvc2FzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.O5MuLWT9P0LpaLwnC9AAzG4djul9mXR7UyywTYGoIamw7E4VDvjgZPOh9TBPSk1bGJ0TWxYpT0PbqZ5wbcLXCuuOGrycwe90qSudegeCfjhZoyZliEz4Yz0yBijIAYCaSdGFYsn1smuTXOHP02iKv9w2_npqiGXVsWpyxgSjBYIt1Y07R63xAo8zt2OZAA4uXbeL5msfgrt5JE1RolY9r5TQeJ_RofFJaKxymFvD7WkOmiEgivl1vSUQHPC6ax_g_mZPrWGvdnVfGSgIMSz1WHPwpxlWBwzpfz_tY8j7cMTuB-wJL-mCw7owgN2hl6EeGmz3j-miZs3JTWZOeM40jg";
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 30);
            document.cookie = `accessToken=${t}; expires=${expirationDate.toUTCString()}; secure; HttpOnly; SameSite=Strict`
            dialogRef.close()
            this.router.navigate(["/dashboard"])
          }
        }
      }
    });
    
  }
}
