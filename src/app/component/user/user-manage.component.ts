/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
import {Component, OnInit} from '@angular/core';
import {IUser, UserService} from '../../service/user.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AlbumListDialogComponent} from '../album/album-list.dialog';
import {PostListDialogComponent} from '../post/post-list.dialog';
import {EditUserDialogComponent} from './user-edit.dialog';

@Component({
  selector: 'app-user-manage',
  templateUrl: 'user-manage.component.html'
})
export class UserManageComponent implements OnInit {
  private items: Array<IUser> = [];

  constructor(private userService: UserService, private dialog: MatDialog,
              public snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initList();
  }

  initList() {
    this.snackBar.open('Loading...', '', {
      duration: 2000,
    });

    this.userService.list().subscribe(res => {
      this.items = res;
      this.snackBar.dismiss();
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

  create() {
    this.edit(<IUser>{
      username: '', name: '', email: '', phone: ''
    });
  }

  delete(user: IUser) {
    this.snackBar.open('Deleting...', '', {
      duration: 2000,
    });

    this.userService.delete(user.id).subscribe(res => {
      this.initList();
      this.snackBar.dismiss();
    });
  }

  edit(user: IUser) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.initList();
      }
    });
  }
}


