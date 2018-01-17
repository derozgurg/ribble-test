import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatTableModule} from "@angular/material";
import {SpiModule} from 'spi-ng2';
import {UserManageComponent} from './component/user/user-manage.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserManageComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    SpiModule.forRoot(),
    HttpClientModule,
    MatCardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
