/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */

import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {IUser} from '../../service/user.service';

@Component({
  selector: 'app-albumlist-dialog',
  templateUrl: 'album-list.dailog.html'
})
export class AlbumListDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AlbumListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: IUser,
              private albumService: AlbumService) {
  }

  ngOnInit(): void {


  }

  close(): void {
    this.dialogRef.close(true);
  }
}
