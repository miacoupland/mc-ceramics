import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IGalleryTileInfo } from 'src/app/domain/entities/IGalleryTileInfo';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { GalleryTileComponent } from './gallery-tile/gallery-tile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    GalleryTileComponent,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public galleryTileInfo: IGalleryTileInfo[] = [];
  public breakpoint: number = 4;
  private _galleryAssets: string = 'assets/images.json';

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.getJSON().subscribe((data) => {
      data.galleryImages.forEach((element: IGalleryTileInfo) => {
        this.galleryTileInfo.push(element);
      });
    });

    this.setColumnWidth();
  }

  public openDialog(element: IGalleryTileInfo): void {
    this.dialog.open(GalleryTileComponent, {
      data: element,
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }

  public setColumnWidth(): void {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 4;
  }

  private getJSON(): Observable<any> {
    return this.http.get(this._galleryAssets);
  }
}
