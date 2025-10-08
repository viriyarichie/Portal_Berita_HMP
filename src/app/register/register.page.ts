import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  username: string = '';
  password: string = '';
  users: User[] = [{ username: 'admin', password: '123' }];

  Register() {
    for (var i = 0; i < this.users.length; i++) {
      if (this.username == this.users[i].username) {
        alert('Username sudah terdaftar!');
      }
    }

    this.users.push({ username: this.username, password: this.password });
    alert('Register berhasil!');
    this.router.navigate(['/login']);
  }
}
