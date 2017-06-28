import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ProposalsService } from './proposals.service';
import { Artist } from '../artist';
import { Song } from '../song';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css'],
  providers: [ProposalsService],

})
export class ProposalsComponent implements OnInit {

  artists: Artist[];
  selectedArtist: 0;
  newArtist: boolean;
  songs: Song[];

  constructor(private services: ProposalsService) { }

  ngOnInit() {
    this.getArtists();
    this.getSongs();
  }

  onChangeArtist(artistId) {
    this.selectedArtist = artistId;
  }

  getSongs(): void {
      this.services.getSongs()
      .subscribe(
        songs => this.songs = songs
      );
  }

  getArtists(): void {
    this.services.getArtists()
    .subscribe(
      artists => this.artists = artists
    );
   }

  addSong(title: string): void {
    title = new TitleCasePipe().transform(title.trim());
    if (!title) { return; }
    this.services.addSong(title, this.selectedArtist)
    .subscribe(
      newSong => {
        this.songs.push(newSong);
      }
    );
  }

  addArtist(artist: string): void {
    artist = new TitleCasePipe().transform(artist.trim());
    if (!artist) { return; }
    this.services.addArtist(artist)
    .subscribe(
      newArtist => {
        this.newArtist = false;
        this.artists.push(newArtist);
      }
    );
  }

  showNewArtist() {
    this.newArtist = true;
  }
}
