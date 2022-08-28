import { Component, OnInit } from '@angular/core';
import { faEtsy } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public faEtsy = faEtsy;
  public faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
