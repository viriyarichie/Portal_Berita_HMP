import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: false,
})
export class SettingPage implements OnInit {
  constructor() {}

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
}
