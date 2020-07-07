import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { MusicComponent } from "./Components/music/music.component";
import { VideosComponent } from "./Components/videos/videos.component";
import { ShowsComponent } from "./Components/shows/shows.component";
import { ShopComponent } from "./Components/shop/shop.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "music",
    component: MusicComponent,
  },
  {
    path: "videos",
    component: VideosComponent,
  },
  {
    path: "shows",
    component: ShowsComponent,
  },
  {
    path: "shop",
    component: ShopComponent,
  },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
