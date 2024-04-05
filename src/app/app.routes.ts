import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MovieComponent } from "./pages/movie/movie.component";
import { SearchComponent } from "./pages/search/search.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movie/:id",
    component: MovieComponent,
  },{
    path: "movies",
    component: MovieComponent,
  },
  {
    path: "search/:term",
    component: SearchComponent,
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
