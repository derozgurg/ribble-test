import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatTableModule, MatTabsModule} from '@angular/material';
import {SpiModule} from 'spi-ng2';
import {UserManageComponent} from './component/user/user-manage.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostService} from './service/post.service';
import {AlbumListDialogComponent} from './component/album/album-list.dialog';
import {AlbumService} from "./service/album.service";


@NgModule({
  declarations: [
    AppComponent,
    AlbumListDialogComponent,
    UserManageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule, MatGridListModule, MatTabsModule,
    SpiModule.forRoot(),
    HttpClientModule,
    MatCardModule
  ],
  entryComponents: [AlbumListDialogComponent],
  providers: [UserService, PostService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
