import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(
    private router: Router,
  ) { }

  searchMovie(event: any, term: string) {
    event.preventDefault();
    console.log('searchMovie: ', event, term);
  }

}