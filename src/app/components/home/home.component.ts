import { Component } from '@angular/core';
import { iPhoto } from '../../interfaces/photo';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  photos: iPhoto[] = [];
  fav: iPhoto[] = [];

  constructor(private photoSvc: PhotoService) {}

  ngOnInit() {
    this.photoSvc.getAllPhotos().subscribe((photos) => {
      this.photos = photos;
    });

    this.photoSvc.favourites$.subscribe((photo) => {
      this.fav.push(photo);
    });
  }

  addToFav(photo: iPhoto) {
    this.photoSvc.addToFavourites(photo);
  }
}
