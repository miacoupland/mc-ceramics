import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IGalleryTileInfo } from 'src/app/domain/entities/IGalleryTileInfo';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private _galleryAssets: string = 'assets/images.json';
  public galleryTileInfo: IGalleryTileInfo[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(data => {
      console.log('data', data.galleryImages);
      data.galleryImages.forEach((element: IGalleryTileInfo) => {
        this.galleryTileInfo.push(element);
      });
    });
   }

  ngOnInit(): void {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._galleryAssets);
  }

}
