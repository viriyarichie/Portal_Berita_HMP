import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
  standalone: false,
})
export class MyFavoritePage implements OnInit {
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
  ];

  ngOnInit() {}

  goToBerita(judul: string) {
    this.router.navigate(['/baca-berita', judul]);
  }

  gantiFavorit(b: Berita) {
    if (b) {
      if (b.isFavorite == true) {
        b.isFavorite = false;
      } else {
        b.isFavorite = true;
      }
    }
  }

  // displayFav() {
  //   var display = [];
  //   var kategoriBerita = this.kategoris[0].name;

  //   for (let i of this.beritas) {
  //     // for (let j of i.kategori) {
  //     //   if (j == kategoriBerita) {
  //     //     display.push(i);
  //     //     break;
  //     //   }
  //     // }
  //     if(i.isFavorite == true){

  //     }

  //   }
  //   return display;
  // }

  listRating: number[] = [1, 2, 3, 4, 5];

  clickRating(b: Berita, rate: number) {
    b.rating = rate;
  }
}
