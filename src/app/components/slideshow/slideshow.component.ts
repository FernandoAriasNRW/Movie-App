import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response';
import Swiper from 'swiper';import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterContentInit {

  @Input() public movies: Movie[] = [];

  constructor(
  ) { }

  ngAfterContentInit(): void {
    const swiper = new Swiper('.swiper', {

      autoplay: true,
      direction: 'horizontal',
      loop: true,
      setWrapperSize: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });
  }

  ngOnInit(): void {
    console.log('SlideComponents Movies: ', this.movies)
  }


}
