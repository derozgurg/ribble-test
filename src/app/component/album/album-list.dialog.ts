/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */

import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {IUser} from '../../service/user.service';

import {AlbumService, IAlbum} from '../../service/album.service';

@Component({
  selector: 'app-albumlist-dialog',
  templateUrl: 'album-list.dialog.html'
})
export class AlbumListDialogComponent implements OnInit {

  private items: Array<IAlbum> = [];
  constructor(public dialogRef: MatDialogRef<AlbumListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: IUser,
              private albumService: AlbumService) {
  }


  ngOnInit(): void {

    this.albumService.list(this.user.id).subscribe(res => {
      this.items = res;
    });
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
