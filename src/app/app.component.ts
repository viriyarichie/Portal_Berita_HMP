import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(public router: Router) {}
  
  tampilkanTab(): boolean {
    const url = this.router.url;
    if (url.includes('/login')) {
      return false; 
    }

    if (url.includes('/register')) {
      return false;
    }
    return true;
  }
}