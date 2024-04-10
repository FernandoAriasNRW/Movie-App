import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviePosterGridComponent } from './movie-poster-grid/movie-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
    declarations: [
        NotFoundComponent,
        NavbarComponent,
        SlideshowComponent,
        MoviePosterGridComponent,
    ],
    exports: [
        NotFoundComponent,
        NavbarComponent,
        SlideshowComponent,
        MoviePosterGridComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        PipesModule
    ]
})
export class ComponentsModule { }
