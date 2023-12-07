import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public title: string = 'MC Ceramics';

  constructor() {}

  ngOnInit(): void {}

  toggleHamburger(): void {
    const hamburger = document.getElementById('links');
    if (hamburger?.classList.contains('hidden')) {
      hamburger.classList.remove('hidden');
      hamburger.classList.add('shown');
    } else {
      hamburger?.classList.add('hidden');
      hamburger?.classList.remove('shown');
    }
  }
}
