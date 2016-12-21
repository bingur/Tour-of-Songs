import { Song } from './song';
import { HEROES } from './mock-songs';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SongService {


  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'songs.json';  // URL to web api

  constructor(private http: Http) { }

  getSongs(): Promise<Song[]> {
    let data= this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Song[])
      .catch(this.handleError);
    return data;
  }

  // getSongs(): Promise<Song[]> {
  //   console.log(Promise.resolve(HEROES));
  //   return Promise.resolve(HEROES);
  // }

  getSongsSlowly(): Promise<Song[]> {
    return new Promise<Song[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getSongs());
  }

  getSong(id: number): Promise<Song> {
    return this.getSongs()
      .then(songs => songs.find(song => song.id === id));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


