import { Component, OnInit } from '@angular/core';
import { CoverService } from './cover.service';
import { Song } from '../song';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  providers: [CoverService],
})
export class CoverComponent implements OnInit {
  songs: Song[];

  constructor(private service: CoverService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    this.service.getSongs()
    .subscribe(
      songs => this.songs = songs
    );
   }
 }
