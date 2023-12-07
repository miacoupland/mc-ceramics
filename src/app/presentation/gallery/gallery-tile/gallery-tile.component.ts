import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-tile',
  templateUrl: './gallery-tile.component.html',
  styleUrls: ['./gallery-tile.component.scss']
})
export class GalleryTileComponent implements OnInit {
  @Input()
  public imageLink!: string;
  @Input()
  public description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
