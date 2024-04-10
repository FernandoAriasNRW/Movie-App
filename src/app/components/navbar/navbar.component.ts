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

  searchMovie(event: any, term: string, target?: any) {
    event.preventDefault();

    term = term.trim();

    if (term.length === 0) return;

    if (target) target.value = '';

    event.target.value = '';


    this.router.navigate(['/search', term]);

  }


}

