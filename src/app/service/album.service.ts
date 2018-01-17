/**
 * Created by Ozgur Cimen on 17-Jan-18.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationConfig} from '../config';
import {Observable} from 'rxjs/Observable';

export interface IAlbum {
  userId: string;
  id: string;
  title: string;
}

@Injectable()
export class AlbumService {

  private url: string = ApplicationConfig.endPoints.api + '/albums';

  constructor(private httpClient: HttpClient) {

  }

  get(id: string): Observable<IAlbum> {
    return this.httpClient.get<IAlbum>(`${this.url}/${id}`);
  }

  list(userId: string): Observable<Array<IAlbum>> {
    return this.httpClient.get<Array<IAlbum>>(this.url);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  post(item: IAlbum) {
    return this.httpClient.post(this.url, item);
  }
}
