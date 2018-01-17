/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */

import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {IUser} from '../../service/user.service';

import {AlbumService, IAlbum} from '../../service/album.service';
import {IPost, PostService} from "../../service/post.service";

@Component({
  selector: 'app-postlist-dialog',
  templateUrl: 'post-list.dialog.html'
})
export class PostListDialogComponent implements OnInit {

  private items: Array<IPost> = [];
  constructor(public dialogRef: MatDialogRef<PostListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: IUser,
              private postService: PostService) {
  }


  ngOnInit(): void {
    this.postService.list(this.user.id).subscribe(res => {
      this.items = res;
    });
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
