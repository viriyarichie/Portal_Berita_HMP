import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Portalberita } from '../portalberita';



@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
  standalone: false,
})
export class BacaBeritaPage implements OnInit {

  constructor(private router: ActivatedRoute, private route: ActivatedRoute, private service:Portalberita) {}

  komentar: string = '';
  kategoris: any[] = [];
  beritas: any[] = [];
  
  judul: string = '';
  isi: string = '';
  fotoJudul: string = '';
  rating: number[] = [];
  penulis: string = '';
  tglUpload: Date = new Date();
  b?: any;

  judulGet: string = '';
  kategoriGet: string = '';
  dari: string = '';

  ngOnInit() {
    // var judulGet = this.router.snapshot.paramMap.get('judul') || '';
    // this.kategoriGet = this.router.snapshot.queryParamMap.get('kategori') || '';
    // this.dari = this.router.snapshot.queryParamMap.get('dari') || '';

    this.route.params.subscribe((params) => {
      this.dari = params['asal'];
      this.judulGet = params['judul'];
    });

        // ambil semua data dari service
    this.kategoris = this.service.getKategoris();
    this.beritas = this.service.getBeritas();

    // ambil berita berdasarkan judul
    this.b = this.service.getBeritaByJudul(this.judulGet);

    for (let berita of this.beritas) {
      if (berita.judul == this.judulGet) {
        this.judul = berita.judul;
        this.isi = berita.isi;
        this.fotoJudul = berita.fotoJudul;
        this.rating = berita.rating;
        this.penulis = berita.penulis;
        this.tglUpload = berita.tanggalUpload;

        this.b = berita;
      }
    }
  }

  // goBack() {
  //   this.navCtrl.navigateBack('/kategori/{{kategoriGet}}');
  // }

  today_ind(): string {
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];

    const d = this.tglUpload.getDate();
    const m = this.tglUpload.getMonth();
    const y = this.tglUpload.getFullYear();
    const day = days[this.tglUpload.getDay()];

    return day + ', ' + d + ' ' + months[m] + ' ' + y;
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
  ratingInput: number = 0;

  clickRating(rate: number) {
    this.ratingInput = rate;

    this.b?.rating.push(rate);
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

  // tipeStar(j: number, avg: number) {
  //   var full = Math.floor(avg);
  //   var setengah = avg - full >= 0.5;

  //   if (j < full) {
  //     return 'star';
  //   } else if (j == full && setengah) {
  //     return 'star-half-outline';
  //   } else {
  //     return 'star-outline';
  //   }
  // }
}
