import { Component } from '@angular/core';
import { HeaderComponent } from './presentation/header/header.component';
import { FooterComponent } from './presentation/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent {}
