/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser, UserService} from '../../service/user.service';

@Component({
  selector: 'app-edituser-dialog',
  templateUrl: 'user-edit.dailog.html'
})
export class EditUserDialogComponent implements OnInit {

  private title = '';
  private form: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: IUser,
              public snackBar: MatSnackBar,
              private userService: UserService) {

    this.title = (user.username.length > 1) ? `${user.username} - Edit` : 'New User';

    this.form = new FormGroup({
      name: new FormControl(user.name, [Validators.required]),
      username: new FormControl(user.username, [Validators.required]),
      email: new FormControl(user.email, [Validators.required]),
      phone: new FormControl(user.phone, [Validators.required]),
    });
  }

  ngOnInit(): void {

  }

  save() {
    this.snackBar.open('Saving...', '', {
      duration: 2000,
    });

    if (this.user.id) {
      this.userService.put(this.user).subscribe(res => {
        this.snackBar.dismiss();
        this.dialogRef.close(true);
      });
    } else {
      this.userService.post(this.user).subscribe(res => {
        this.snackBar.dismiss();
        this.dialogRef.close(true);
      });
    }
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
