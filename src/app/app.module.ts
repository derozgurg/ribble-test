import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatSelectModule,
  MatSidenavModule,
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
import {PostListDialogComponent} from "./component/post/post-list.dialog";

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
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumListDialogComponent,
    PostListDialogComponent,
    UserManageComponent
  ],
  imports: [
    ...matarialImports,
    BrowserAnimationsModule,
    BrowserModule,
    SpiModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [AlbumListDialogComponent, PostListDialogComponent],
  providers: [UserService, PostService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
