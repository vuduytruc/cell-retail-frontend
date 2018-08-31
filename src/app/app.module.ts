import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './router';

// Services

import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageCarouselComponent } from './components/home-page-carousel/home-page-carousel.component';
import { HomePageNewsComponent } from './components/home-page-news/home-page-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    HomePageCarouselComponent,
    HomePageNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    // Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
