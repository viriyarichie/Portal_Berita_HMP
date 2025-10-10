import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portalberita } from '../portalberita';

// interface User {
//   username: string;
//   password: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private service: Portalberita) {}

  users: any[] = [];
  ngOnInit() {
    this.users = this.service.users;
  }

  username: string = '';
  password: string = '';

  cek: boolean = false;
  Login() {
    this.cek = false;
    for (var i = 0; i < this.users.length; i++) {
      if (
        this.username == this.users[i].username &&
        this.password == this.users[i].password
      ) {
        this.cek = true;
      }
    }
    if (this.cek) {
      this.router.navigate(['/home']);
    } else {
      alert('Username atau password salah!');
    }
  }
}
