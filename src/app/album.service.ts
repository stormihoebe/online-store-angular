import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    // this.user = afAuth.authState;
    this.albums = db.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: number) {
    // for (var i = 0; i <= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
  }

}
