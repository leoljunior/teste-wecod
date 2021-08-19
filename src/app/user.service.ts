import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://randomuser.me/api/?results=20&inc=login,name,email,phone,picture'

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url)
  }



}
