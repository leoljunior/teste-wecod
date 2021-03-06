import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {} 

  userList: any[] = []

  ngOnInit(): void {
    this.userList = this.userService.loadDataOfLocalStorage()    
  }

  getUsers() {
    this.userService.getUsersFromApi().subscribe((data: any) => {
      this.userList = data.results
      this.userService.updateUsers(data.results)
    })
  }

}
