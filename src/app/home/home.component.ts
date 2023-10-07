import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open("Ni nosotros sabemos!", 'X');
  }

  openDialog() {
    //const dialogRef = this.dialog.open(LoginDialogComponent, {});
  }

}
