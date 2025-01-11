import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopComponent } from './presentation/workshop/workshop.component';
import { AboutComponent } from './presentation/about/about.component';
import { GalleryComponent } from './presentation/gallery/gallery.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './presentation/header/header.component';
import { FooterComponent } from './presentation/footer/footer.component';

@NgModule({
  imports: [
    AboutComponent,
    AppComponent,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    WorkshopComponent,
  ],
  providers: [provideAnimationsAsync(), provideHttpClient(), provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
