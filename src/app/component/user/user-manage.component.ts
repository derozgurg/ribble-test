/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
import {Component, OnInit} from '@angular/core';
import {IUser, UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-manage',
  templateUrl: 'user-manage.component.html'
})
export class UserManageComponent implements OnInit{
  private items: Array<IUser> = [] ;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.list().subscribe(res => {
      this.items = res;
    });
  }
}
