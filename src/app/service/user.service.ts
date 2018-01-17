/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationConfig} from '../config';
import {Observable} from 'rxjs/Observable';

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable()
export class UserService {

  private url: string = ApplicationConfig.endPoints.api + '/users';

  constructor(private httpClient: HttpClient) {

  }

  get(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}/${id}`);
  }

  list(): Observable<Array<IUser>> {
    return this.httpClient.get<Array<IUser>>(this.url);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  post(item: IUser) {
    return this.httpClient.post(this.url, item);
  }
}
