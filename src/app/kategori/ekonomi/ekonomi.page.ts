import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  foto: string;
}

@Component({
  selector: 'app-ekonomi',
  templateUrl: './ekonomi.page.html',
  styleUrls: ['./ekonomi.page.scss'],
  standalone: false,
})
export class EkonomiPage implements OnInit {
  constructor(private router: Router) {}

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
    },
    {
      judul: 'Penjualan Saham',
      isi: 'Saham perusahaan teknologi naik 20% dalam seminggu.',
      kategori: [this.kategoris[0].name, this.kategoris[4].name],
      foto: 'assets/img/saham.jpg',
    },
  ];

  ngOnInit() {}

  goToBerita(judul: string) {
    this.router.navigate(['/baca-berita', judul]);
  }
}
