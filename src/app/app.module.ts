import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LayoutModule } from "@angular/cdk/layout";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./Components/home/home.component";
import { VideosComponent } from "./Components/videos/videos.component";
import { ShowsComponent } from "./Components/shows/shows.component";
import { MusicComponent } from "./Components/music/music.component";
import { ShopComponent } from "./Components/shop/shop.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    ShowsComponent,
    MusicComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
