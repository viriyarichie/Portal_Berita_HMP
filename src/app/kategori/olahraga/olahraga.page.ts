import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-olahraga',
  templateUrl: './olahraga.page.html',
  styleUrls: ['./olahraga.page.scss'],
  standalone: false,
})
export class OlahragaPage implements OnInit {
  constructor(private router: Router, private navCtrl:NavController) {}

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

  b?: Berita;

  ngOnInit() {}

  goToBerita(judul: string) {
    this.router.navigate(['/baca-berita', judul]);
  }

  goBack(){
    this.navCtrl.navigateBack('/kategori')
  }

  displayOlahraga() {
    var display = [];
    var kategoriBerita = this.kategoris[1].name;

    for (let i of this.beritas) {
      for (let j of i.kategori) {
        if (j == kategoriBerita) {
          display.push(i);
          break;
        }
      }
    }
    return display;
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
