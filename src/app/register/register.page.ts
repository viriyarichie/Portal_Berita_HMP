import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portalberita } from '../portalberita';

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
  constructor(private router: Router, private service: Portalberita) {}

  users: any[] = [];
  ngOnInit() {
    this.users = this.service.users;
  }

  username: string = '';
  password: string = '';

  cek: boolean = false;
  Register() {
    this.cek = false;
    for (var i = 0; i < this.users.length; i++) {
      if (this.username == this.users[i].username) {
        this.cek = true;
        break;
      }
    }

    if (this.cek) {
      alert('Username sudah terdaftar!');
    } else {
      this.users.push({ username: this.username, password: this.password });
      alert('Register berhasil!');
      this.router.navigate(['/login']);
    }
  }
}
