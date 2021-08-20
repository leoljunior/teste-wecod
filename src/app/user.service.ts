import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  userList: any[] = []
  constructor(private httpClient: HttpClient) {
    this.loadDataOfLocalStorage() 
  }

  url = 'https://randomuser.me/api/?results=20&inc=login,name,email,phone,picture'

  getUsersFromApi(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url)
  }

  getUserById(uuid: any) {
    return this.userList.find(user => user.login.uuid === uuid)
  }

  updateUsers(lista: any[]) {
    this.userList = lista
    this.saveInLocalStorage()
  }

  saveInLocalStorage() {
    const data = JSON.stringify(this.userList)
    localStorage.setItem('list', data)
  }

  loadDataOfLocalStorage() {
    const data = localStorage.getItem('list')
    if(data) {
      this.userList = JSON.parse(data)
    }else {
      this.userList
    }
    return this.userList
  }

}
