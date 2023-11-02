import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { IUser } from '../interfaces/User.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user!:IUser

  constructor(
    private userS:UsersService,
    private authS:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.userS.getCurrentUser().subscribe(user => this.user = user)
  }

  logout(){
    this.authS.logout().subscribe(res => {
      if(res.isOK){
        this.router.navigate(["/"])
      }
    })
  }

}
