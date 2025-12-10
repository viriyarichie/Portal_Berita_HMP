import { Component, OnInit } from '@angular/core';
import { Portalberita } from '../portalberita';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buat-kategori',
  templateUrl: './buat-kategori.page.html',
  styleUrls: ['./buat-kategori.page.scss'],
  standalone: false,
})
export class BuatKategoriPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Portalberita
  ) {}

  namaKategori: string = '';
  kategoris: any[] = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service.kategoriList().subscribe((data) => {
        this.kategoris = data;
      });
    });
  }

  simpanKategori() {
    for (var i = 0; i < this.kategoris.length; i++) {
      if (this.namaKategori == this.kategoris[i].name) {
        alert('Nama kategori sudah terdaftar!');
        return;
      }
    }

    this.service
      .insertKategori(this.namaKategori)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Berhasil menyimpan kategori!');
          this.namaKategori = '';
        } else {
          alert('Gagal menyimpan kategori: ' + response.message);
        }
      });
  }
}
