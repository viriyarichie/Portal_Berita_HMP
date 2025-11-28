import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portalberita } from '../portalberita';

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

  name: string = '';
  username: string = '';
  password: string = '';
  konfPassword: string = '';

  cek: boolean = false;
  Register() {
    if (this.name.trim() == '') {
      alert('Nama harus diisi!');
      return;
    }

    var regex = /\d/;
    if (regex.test(this.name)) {
      alert('Nama tidak boleh mengandung angka!');
      return;
    }

    if (this.password != this.konfPassword) {
      alert('Password dan password konfirmasi tidak sama!');
      return;
    }

    this.cek = false;
    for (var i = 0; i < this.users.length; i++) {
      if (this.username == this.users[i].username) {
        this.cek = true;
        alert('username sudah terdaftar!');
        return;
      }
    }

    this.users.push({
      name: this.name,
      username: this.username,
      password: this.password,
    });
    alert('Register berhasil!');
    this.router.navigate(['/login']);
  }
}
