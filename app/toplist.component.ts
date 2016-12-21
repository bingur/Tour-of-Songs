import { Component, OnInit } from '@angular/core';

import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'music-toplist',
  templateUrl: 'toplist.component.html',
  styleUrls: [ 'toplist.component.css' ]
})
export class ToplistComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs()
      .then(songs => this.songs = songs.slice(1, 5));
  }
}



