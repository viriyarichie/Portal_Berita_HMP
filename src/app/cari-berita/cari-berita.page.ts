import { Component, OnInit } from '@angular/core';

interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  fotoJudul: string;
  isFavorite: boolean;
  foto: string[];
  rating: number;
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
      fotoJudul: 'assets/img/bola.jpg',
      isFavorite: true,
      foto: [],
      rating: 3,
    },
    {
      judul: 'Penjualan Saham',
      isi: 'Saham perusahaan teknologi naik 20% dalam seminggu.',
      kategori: [this.kategoris[0].name, this.kategoris[4].name],
      fotoJudul: 'assets/img/saham.jpg',
      isFavorite: false,
      foto: [],
      rating: 2,
    },
    {
      judul: 'Dembélé Menangkan Ballon d’Or 2025',
      isi: 'Ousmane Dembélé resmi meraih Ballon d’Or 2025 setelah tampil gemilang sepanjang musim dan membawa klub serta timnasnya meraih berbagai gelar.',
      kategori: [this.kategoris[1].name], // kategori olahraga (index 1)
      fotoJudul:
        'https://cdn.rri.co.id/berita/Bogor/o/1758611026115-G1fYqwSWoAAnUOa/fdlu1xddl5qg5wd.jpeg', // ganti dengan path gambar yang kamu punya
      isFavorite: false,
      foto: [],
      rating: 4,
    },
  ];

  beritaFiltered: Berita[] = [];

  ngOnInit() {
    this.beritaFiltered = this.beritas;
  }

  search(query: string) {}
}
