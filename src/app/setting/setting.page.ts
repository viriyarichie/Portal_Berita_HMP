import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: false,
})
export class SettingPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  mode: boolean = false;
  gantiMode() {
    if (this.mode) {
      document.body.classList.remove('darkMode');
      document.body.classList.add('lightMode');
    } else {
      document.body.classList.remove('lightMode');
      document.body.classList.add('darkMode');
    }
  }

  logout() {
    localStorage.removeItem('userLogin');
    this.router.navigate(['/login']);
  }
}
