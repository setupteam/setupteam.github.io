import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuthRes } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected apiEndpoint:string = environment.apiEndpoint + "auth/"

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post<IAuthRes>(this.apiEndpoint + "login", user)
  }
}
