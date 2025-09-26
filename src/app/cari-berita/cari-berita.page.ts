import { Component, OnInit } from '@angular/core';

interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  foto: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-cari-berita',
  templateUrl: './cari-berita.page.html',
  styleUrls: ['./cari-berita.page.scss'],
  standalone: false,
})
export class CariBeritaPage implements OnInit {
  constructor() {}

  kategoris: { name: string; route: string }[] = [
    { name: 'Ekonomi', route: '/kategori/ekonomi' },
    { name: 'Olahraga', route: '/kategori/olahraga' },
    { name: 'Teknologi', route: '/kategori/teknologi' },
    { name: 'Kesehatan', route: '/kategori/kesehatan' },
    { name: 'Saham', route: '/kategori/saham' },
  ];

  beritas: Berita[] = [
    {
      judul: 'Penjualan Bola',
      isi: 'Penjualan bola meningkat pesat di pasar internasional.',
      kategori: [this.kategoris[0].name, this.kategoris[1].name],
      foto: 'assets/img/bola.jpg',
      isFavorite: true,
    },
    {
      judul: 'Penjualan Saham',
      isi: 'Saham perusahaan teknologi naik 20% dalam seminggu.',
      kategori: [this.kategoris[0].name, this.kategoris[4].name],
      foto: 'assets/img/saham.jpg',
      isFavorite: false,
    },
  ];

  beritaFiltered: Berita[] = [];

  ngOnInit() {
    this.beritaFiltered = this.beritas;
  }

  search(query: string) {}
}
