import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }
  
  user: any
 
  ngOnInit(): void {
  
  this.route.params.subscribe(params => {
    this.user = this.userService.getUserById(params['uuid'])    
  })
  }


}