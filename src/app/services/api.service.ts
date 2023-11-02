import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService <E> {
  protected apiEndpoint:string = environment.apiEndpoint
  protected url!:string

  constructor(protected http:HttpClient) {
  }

  list(){
    return this.http.get<E[]>(`${ this.url }`,{
      withCredentials: true
    })
  }

  getTest(){
    return this.http.get<{test:string}>(`${this.apiEndpoint}test`)
  }
}
