import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IGalleryTileInfo } from 'src/app/domain/entities/IGalleryTileInfo';

@Component({
  selector: 'app-gallery-tile',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './gallery-tile.component.html',
  styleUrls: ['./gallery-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryTileComponent implements OnInit {
  @Input()
  public imageLink!: string;
  @Input()
  public description!: string;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: IGalleryTileInfo) {}

  public ngOnInit(): void {
    if (this.data !== null) {
      this.imageLink = this.data.imageLink;
      this.description = this.data.description;
    }
  }
}
