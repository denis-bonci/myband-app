import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Song } from '../song';
import { Artist } from '../artist';
import { environment } from '../../environments/environment';

@Injectable()
export class CoverService {
  private apiSongsUrl = environment.apiUrl + '/songs';
  private apiArtistsUrl = environment.apiUrl + '/artists';

  constructor(private http: Http) { }

  getSongs(): Observable<Song[]> {
    return this.http.get(this.apiSongsUrl)
    .map(response => response.json() as Song[]);
  }
}
