import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Song } from '../song';
import { Artist } from '../artist';
import { environment } from '../../environments/environment';

@Injectable()
export class ProposalsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiSongsUrl = environment.apiUrl + '/songs';
  private apiArtistsUrl = environment.apiUrl + '/artists';
  private apiProposalsUrl = environment.apiUrl + '/proposals';


  constructor(private http: Http) { }

  addSong(title: string, artist: number): Observable<Song> {
    return this.http.post(this.apiSongsUrl,
      JSON.stringify({
        title: title,
        artist: artist
      }),
      {headers: this.headers})
      .map(response => response.json() as Song);
  }

  addArtist(name: string): Observable<Artist> {
    return this.http.post(this.apiArtistsUrl,
      JSON.stringify({
        name: name
      }),
      {headers: this.headers})
      .map(response => response.json() as Artist);
  }

  getArtists(): Observable<Artist[]> {
    return this.http.get(this.apiArtistsUrl)
    .map(response => response.json() as Artist[]);
  }

  getSongs(): Observable<Song[]> {
    return this.http.get(this.apiProposalsUrl)
    .map(response => response.json() as Song[]);
  }
}
