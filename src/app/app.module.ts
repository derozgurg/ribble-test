import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatTableModule,
  MatTabsModule, MatToolbarModule
} from "@angular/material";
import {SpiModule} from 'spi-ng2';
import {UserManageComponent} from './component/user/user-manage.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostService} from './service/post.service';
import {AlbumListDialogComponent} from './component/album/album-list.dialog';
import {AlbumService} from './service/album.service';
import {PostListDialogComponent} from './component/post/post-list.dialog';
import {EditUserDialogComponent} from './component/user/user-edit.dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const matarialImports = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatSelectModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumListDialogComponent,
    PostListDialogComponent,
    EditUserDialogComponent,
    UserManageComponent
  ],
  imports: [
    ...matarialImports,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    SpiModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [AlbumListDialogComponent, PostListDialogComponent, EditUserDialogComponent],
  providers: [UserService, PostService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
