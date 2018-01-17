/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
import {Component, OnInit} from '@angular/core';
import {IUser, UserService} from '../../service/user.service';
import {MatDialog} from '@angular/material';
import {AlbumListDialogComponent} from '../album/album-list.dialog';
import {PostListDialogComponent} from '../post/post-list.dialog';
import {EditUserDialogComponent} from './user-edit.dialog';

@Component({
  selector: 'app-user-manage',
  templateUrl: 'user-manage.component.html'
})
export class UserManageComponent implements OnInit {
  private items: Array<IUser> = [];

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initList();
  }

  initList() {
    this.userService.list().subscribe(res => {
      this.items = res;
    });
  }

  openPosts(user: IUser) {
    const dialogRef = this.dialog.open(PostListDialogComponent, {
      data: user
    });
  }

  openAlbums(user: IUser) {
    const dialogRef = this.dialog.open(AlbumListDialogComponent, {
      data: user
    });
  }

  create(){
    this.edit(<IUser>{
      username: '', name: '', email: '', phone: ''
    });
  }

  edit(user: IUser) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.initList();
      }
    });
  }
}


