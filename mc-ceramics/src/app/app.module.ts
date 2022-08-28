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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    WorkshopComponent,
    AboutComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
