import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  username: String = '';
  password: String = '';
  users: User[] = [{ username: 'admin', password: '123' }];

  cek: boolean = false;
  Login() {
    // console.log('User typed:', this.username, this.password);
    this.cek = false;
    for (var i = 0; i < this.users.length; i++) {
      if (
        this.username == this.users[i].username &&
        this.password == this.users[i].password
      ) {
        this.cek = true;
        this.router.navigate(['/home']);
      } else {
        this.cek = false;
        alert('Username atau password salah!');
      }
    }
  }
}
