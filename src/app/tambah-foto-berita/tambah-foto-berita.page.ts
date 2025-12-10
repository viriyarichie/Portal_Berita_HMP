import { Component, OnInit } from '@angular/core';
import { Portalberita } from '../portalberita';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tambah-foto-berita',
  templateUrl: './tambah-foto-berita.page.html',
  styleUrls: ['./tambah-foto-berita.page.scss'],
  standalone: false,
})
export class TambahFotoBeritaPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Portalberita
  ) {}

  beritas: any[] = [];
  urlFotoBerita: string = '';
  idBeritaTerpilih: string = '';

  ngOnInit() {
    this.service.beritaList().subscribe((dataBerita) => {
      this.beritas = dataBerita;
    });
  }

  simpanFotoBerita() {
    this.service
      .insertFotoBerita(this.urlFotoBerita, this.idBeritaTerpilih)
      .subscribe((response: any) => {
        if (response.result == 'success') {
          alert('Berhasil menyimpan foto!');
          this.idBeritaTerpilih = '';
          this.urlFotoBerita = '';
        } else {
          alert('Gagal menyimpan foto: ' + response.message);
        }
      });
  }
}
