import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  foto: string;
  isFavorite: boolean;
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

  judul: string = '';
  isi: string = '';
  foto: string = '';
  b?: Berita;

  ngOnInit() {
    var judulGet = this.router.snapshot.paramMap.get('judul') || '';

    for (let berita of this.beritas) {
      if (berita.judul == judulGet) {
        this.judul = berita.judul;
        this.isi = berita.isi;
        this.foto = berita.foto;

        this.b = berita;
      }
    }

    // const nav = this.router.getCurrentNavigation();

    // if (nav && nav.extras && nav.extras.state && nav.extras.state['berita']) {
    //   const berita = nav.extras.state['berita'] as Berita;

    //   // langsung isi field satu-satu, mirip gaya sebelumnya
    //   this.judul = berita.judul;
    //   this.isi = berita.isi;
    //   this.foto = berita.foto;
    // }
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
