import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToplistComponent }   from './toplist.component';
import { SongsComponent }      from './songs.component';
import { SongDetailComponent }  from './song-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/toplist', pathMatch: 'full' },
  { path: 'toplist',  component: ToplistComponent },
  { path: 'detail/:id', component: SongDetailComponent },
  { path: 'songs',     component: SongsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


