import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPhoto } from '../interfaces/photo';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  favourites$ = new Subject<iPhoto>();

  constructor(private http: HttpClient) {}

  getAllPhotos() {
    return this.http
      .get<iPhoto[]>(this.apiUrl)
      .pipe(map((photos) => photos.slice(0, 12)));
  }

  // getPhotoById(id: number) {
  //   return this.http.get<iPhoto[]>(`${this.apiUrl}/${id}`);
  // }

  deletePhotos(id: number) {
    return this.http.delete<iPhoto>(`${this.apiUrl}/${id}`);
  }

  addToFavourites(photo: iPhoto) {
    this.favourites$.next(photo);
  }
}
