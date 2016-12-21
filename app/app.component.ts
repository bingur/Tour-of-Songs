import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'music-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/toplist" routerLinkActive="active">Toplist</a>
      <a routerLink="/songs" routerLinkActive="active">Songs</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Tour of Songs';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
