/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationConfig} from '../config';
import {Observable} from 'rxjs/Observable';

export interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

@Injectable()
export class PostService {

  private url: string = ApplicationConfig.endPoints.api + '/posts';

  constructor(private httpClient: HttpClient) {

  }

  get(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${this.url}/${id}`);
  }

  list(userId: string): Observable<Array<IPost>> {
    return this.httpClient.get<Array<IPost>>(this.url);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  post(item: IPost) {
    return this.httpClient.post(this.url, item);
  }
}
