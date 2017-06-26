import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Song } from '../song';
import { Artist } from '../artist';
import 'rxjs/add/operator/map';


@Injectable()
export class CoverService {
  private apiUrl = 'http://localhost/songs';  // URL to web api

  constructor(private http: Http) { }

  getSongs(): Observable<Song[]> {
    return this.http.get(this.apiUrl).map(res => res.json());
  }

  searchArtists(): Observable<Artist[]> {
    return this.http.get('http://localhost/artists')
    .map(response => response.json() as Artist[]);
  }

}
