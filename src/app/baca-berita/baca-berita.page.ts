import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  fotoJudul: string;
  isFavorite: boolean;
  foto: string[];
}
@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
  standalone: false,
})
export class BacaBeritaPage implements OnInit {
  constructor(private router: ActivatedRoute) {}

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
      fotoJudul: 'assets/img/bola.jpg',
      isFavorite: true,
      foto: [],
    },
    {
      judul: 'Penjualan Saham',
      isi: 'Saham perusahaan teknologi naik 20% dalam seminggu.',
      kategori: [this.kategoris[0].name, this.kategoris[4].name],
      fotoJudul: 'assets/img/saham.jpg',
      isFavorite: false,
      foto: [],
    },
    {
      judul: 'Pola Makan Sehat',
      isi: 'Ahli gizi menyarankan konsumsi sayur dan buah setiap hari untuk meningkatkan daya tahan tubuh.',
      kategori: [this.kategoris[3].name],
      fotoJudul: 'assets/img/makan-sehat.jpg',
      isFavorite: false,
      foto: [],
    },
    {
      judul: 'Olahraga dan Kesehatan Jantung',
      isi: 'Riset menunjukkan olahraga 30 menit sehari dapat menurunkan risiko penyakit jantung hingga 40%.',
      kategori: [this.kategoris[3].name, this.kategoris[1].name],
      fotoJudul: 'assets/img/jantung.jpg',
      isFavorite: false,
      foto: [],
    },
  ];

  judul: string = '';
  isi: string = '';
  fotoJudul: string = '';
  b?: Berita;

  ngOnInit() {
    var judulGet = this.router.snapshot.paramMap.get('judul') || '';

    for (let berita of this.beritas) {
      if (berita.judul == judulGet) {
        this.judul = berita.judul;
        this.isi = berita.isi;
        this.fotoJudul = berita.fotoJudul;

        this.b = berita;
      }
    }
  }

  gantiFavorit() {
    if (this.b) {
      if (this.b.isFavorite == true) {
        this.b.isFavorite = false;
      } else {
        this.b.isFavorite = true;
      }
    }
  }
}
