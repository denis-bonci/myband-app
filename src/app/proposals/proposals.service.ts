import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Song } from '../song';
import { Artist } from '../artist';

@Injectable()
export class ProposalsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  addSong(title: string, artist: number): Observable<Song> {
    return this.http.post("http://localhost/songs",
      JSON.stringify({
        title: title,
        artist: artist
      }),
      {headers: this.headers})
      .map(response => response.json() as Song);
  }

  addArtist(name: string): Observable<Artist> {
    return this.http.post("http://localhost/artists",
      JSON.stringify({
        name: name
      }),
      {headers: this.headers})
      .map(response => response.json() as Artist);
  }

  getArtists(): Observable<Artist[]> {
    return this.http.get('http://localhost/artists')
    .map(response => response.json() as Artist[]);
  }

  getSongs(): Observable<Song[]> {
    return this.http.get('http://localhost/proposals')
    .map(response => response.json() as Song[]);
  }
}
