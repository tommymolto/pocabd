import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  logoff() {
    // Add any logoff logic here if needed
    this.router.navigate(['/login']);
  }
}