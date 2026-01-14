import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portalberita } from '../portalberita';
import { ActivatedRoute } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Portalberita
  ) {}

  users: any[] = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service.userList().subscribe((data) => {
        this.users = data;
      });
    });
  }

  name: string = '';
  email: string = '';
  password: string = '';
  konfPassword: string = '';

  cek: boolean = false;
  Register() {
    if (this.name.trim() == '') {
      alert('Nama harus diisi!');
      return;
    }

    if (this.email.trim() == '') {
      alert('Email harus diisi!');
      return;
    }

    if (this.password.trim() == '') {
      alert('Email harus diisi!');
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
      if (this.email == this.users[i].email) {
        this.cek = true;
        alert('Email sudah terdaftar!');
        return;
      }
    }

    this.service
      .register(this.name, this.email, this.password)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Berhasil mendaftarkan user!');
          this.router.navigate(['login']);
        } else {
          alert('Gagal mendaftarkan user : ' + response.message);
        }
      });
  }
}
