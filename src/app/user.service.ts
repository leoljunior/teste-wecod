import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  lista: any[] = []
  constructor(private httpClient: HttpClient) { }

  url = 'https://randomuser.me/api/?results=20&inc=login,name,email,phone,picture'

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url)
  }

  getById(uuid: any) {
    // console.log('id recebido' + uuid)
  // console.log('lista' + this.lista)
    return this.lista.find(user => user.login.uuid === uuid)
  }

  test(lista: any[]) {
    this.lista = lista
    this.saveInLocalStorage()
  }

  // getall(){
  //   this.loadDataOfLocalStorage()
  //   return this.lista
  // }

  saveInLocalStorage() {
    const data = JSON.stringify(this.lista)
    localStorage.setItem('lista', data)
  }

  loadDataOfLocalStorage() {
    const dat = localStorage.getItem('lista')
    if(dat) {
      this.lista = JSON.parse(dat)
    }else {
      this.lista
    }
    return this.lista
  }

}
