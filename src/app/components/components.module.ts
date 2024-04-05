import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavbarComponent,
    SlideshowComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NotFoundComponent,
    NavbarComponent,
    SlideshowComponent,
  ]
})
export class ComponentsModule { }
