import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  fotoJudul: string;
  isFavorite: boolean;
  foto: string[];
  rating: number[];
}
@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
  standalone: false,
})
export class BacaBeritaPage implements OnInit {
  constructor(private router: ActivatedRoute, private navCtrl: NavController) {}

  komentar: string = '';

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
      rating: [3, 4, 2, 4, 5],
    },
    {
      judul: 'Penjualan Saham',
      isi: 'Saham perusahaan teknologi naik 20% dalam seminggu.',
      kategori: [this.kategoris[0].name, this.kategoris[4].name],
      fotoJudul: 'assets/img/saham.jpg',
      isFavorite: false,
      foto: [],
      rating: [2, 3, 2, 1, 4, 1],
    },
    {
      judul: 'Dembélé Menangkan Ballon d’Or 2025',
      isi: 'Ousmane Dembélé resmi meraih Ballon d’Or 2025 setelah tampil gemilang sepanjang musim dan membawa klub serta timnasnya meraih berbagai gelar.',
      kategori: [this.kategoris[1].name],
      fotoJudul:
        'https://cdn.rri.co.id/berita/Bogor/o/1758611026115-G1fYqwSWoAAnUOa/fdlu1xddl5qg5wd.jpeg',
      isFavorite: false,
      foto: [],
      rating: [4, 5, 4, 3, 4, 2],
    },
  ];

  judul: string = '';
  isi: string = '';
  fotoJudul: string = '';
  rating: number[] = [];
  b?: Berita;

  ngOnInit() {
    var judulGet = this.router.snapshot.paramMap.get('judul') || '';

    for (let berita of this.beritas) {
      if (berita.judul == judulGet) {
        this.judul = berita.judul;
        this.isi = berita.isi;
        this.fotoJudul = berita.fotoJudul;
        // this.rating.push(berita.rating);
        this.rating = berita.rating;

        this.b = berita;
      }
    }
  }

  goBack(){
    this.navCtrl.navigateBack('/kategori');
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

  listRating: number[] = [1, 2, 3, 4, 5];

  clickRating(b: Berita, rate: number) {
    b.rating.push(rate);
  }

  getRating(arrayRating: number[]): number {
    if (arrayRating.length > 0) {
      var totalRating = 0;
      for (var i = 0; i < arrayRating.length; i++) {
        totalRating += arrayRating[i];
      }
    } else {
      return 0;
    }

    return totalRating / arrayRating.length;
  }

  tipeStar(j: number, avg: number) {
    var full = Math.floor(avg);
    var setengah = avg - full >= 0.5;

    if (j < full) {
      return 'star';
    } else if (j == full && setengah) {
      return 'star-half-outline';
    } else {
      return 'star-outline';
    }
  }
}
