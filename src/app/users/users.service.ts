import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IUser } from '../interfaces/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService<IUser> {
  override url = `${this.apiEndpoint}users`;

  getCurrentUser() {
    return this.http.get<IUser>(`${this.url}/current`, {withCredentials: true})
  }
}
