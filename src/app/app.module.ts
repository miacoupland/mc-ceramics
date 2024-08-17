import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './presentation/header/header.component';
import { NavComponent } from './presentation/nav/nav.component';
import { WorkshopComponent } from './presentation/workshop/workshop.component';
import { AboutComponent } from './presentation/about/about.component';
import { GalleryComponent } from './presentation/gallery/gallery.component';
import { FooterComponent } from './presentation/footer/footer.component';
import { GalleryTileComponent } from './presentation/gallery/gallery-tile/gallery-tile.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    WorkshopComponent,
    AboutComponent,
    GalleryComponent,
    GalleryTileComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
