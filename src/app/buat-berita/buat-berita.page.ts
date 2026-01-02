import { Component, OnInit } from '@angular/core';
import { Portalberita } from '../portalberita';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buat-berita',
  templateUrl: './buat-berita.page.html',
  styleUrls: ['./buat-berita.page.scss'],
  standalone: false,
})
export class BuatBeritaPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Portalberita
  ) {}

  // base64: any;

  iduser: string = '';
  judul: string = '';
  isi: string = '';
  penulis: string = '';
  urlFoto: string = '';
  tglBuat = new Date().toISOString().slice(0, 10);
  idKategori: string[] = [];
  idBerita: string = '';

  beritas: any[] = [];
  kategoris: any[] = [];

  ngOnInit() {
    var user = localStorage.getItem('userLogin');
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    var userParse = JSON.parse(user);
    this.iduser = userParse.iduser;

    this.service.kategoriList().subscribe((datakategori) => {
      this.kategoris = datakategori;
    });
  }

  simpanBerita() {
    // for (var i = 0; i < this.beritas.length; i++) {
    //   if (this.judul == this.beritas[i].judul) {
    //     alert('Judul berita sudah terdaftar!');
    //     return;
    //   }
    // }
    // this.urlFoto = 'assets/img/' + this.judul + '.jpg';
    // this.service.uploadImage(this.judul).subscribe((response: any) => {
    //   if (response.result === 'success') {
    //     alert('photo uploaded');
    //   }
    // });

    if (!this.judul || !this.isi || !this.penulis) {
      alert('Judul atau isi harus diisi!');
      return;
    }

    this.service
      .insertBerita(
        this.judul,
        this.isi,
        this.penulis,
        this.urlFoto,
        this.iduser,
        this.tglBuat.toString()
      )
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Berhasil menyimpan berita!');
          this.judul = '';
          this.isi = '';
          this.penulis = '';
          this.urlFoto = '';
          this.tglBuat = '';

          this.idBerita = response.idBerita;

          for (var i = 0; i < this.idKategori.length; i++) {
            this.service
              .insertKategoriBerita(this.idKategori[i], this.idBerita)
              .subscribe((response: any) => {});
          }

          this.judul = '';
          this.isi = '';
          this.penulis = '';
          this.urlFoto = '';
          this.idKategori = [];
        } else {
          alert('Gagal menyimpan berita: ' + response.message);
        }
      });
  }
}
