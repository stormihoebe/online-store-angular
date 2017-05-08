import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import {Router} from '@angular/router';
import { AlbumService } from '../album.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})

export class MarketplaceComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

 goToDetailPage(clickedAlbum) {
   this.router.navigate(['albums', clickedAlbum.$key]);
 }
};
