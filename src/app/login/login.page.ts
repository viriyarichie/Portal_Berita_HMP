import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Portalberita } from '../portalberita';

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

    var user = localStorage.getItem('userLogin');
    if (user) {
      this.router.navigate(['/home']);
    }
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

        localStorage.setItem('userLogin', JSON.stringify(this.users[i]));
      }
    }
    if (this.cek) {
      this.router.navigate(['/home']);
    } else {
      alert('Username atau password salah!');
    }
  }
}
