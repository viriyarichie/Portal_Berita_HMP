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
  constructor(private route: ActivatedRoute, private service: Portalberita) {}

  komen: string = '';
  kategoris: any[] = [];
  beritas: any[] = [];

  judul: string = '';
  isi: string = '';
  fotoJudul: string = '';
  foto: string[] = [];
  rating: number[] = [];
  penulis: string = '';
  tglUpload: Date = new Date();
  b: any;

  judulGet: string = '';
  kategoriGet: string = '';
  dari: string = '';

  indexReply: number | null = null;
  reply: string = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dari = params['asal'];
      this.judulGet = params['judul'];
    });

    this.kategoris = this.service.kategoris;
    this.beritas = this.service.beritas;

    for (let berita of this.beritas) {
      if (berita.judul == this.judulGet) {
        this.judul = berita.judul;
        this.isi = berita.isi;
        this.fotoJudul = berita.fotoJudul;
        this.foto = berita.foto;
        this.rating = berita.rating;
        this.penulis = berita.penulis;
        this.tglUpload = berita.tanggalUpload;

        this.b = berita;
      }
    }
  }

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
  public alertButtons = ['OK'];
  message = '';

  clickRating(rate: number) {
    this.ratingInput = rate;

    this.b.rating.push(rate);
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

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  totalKomentar() {
    var total = 0;
    for (var i = 0; i < this.b.komentar.length; i++) {
      total++;

      if (this.b.komentar[i].replies.length > 0) {
        total += this.b.komentar[i].replies.length;
      }
    }

    return total;
  }

  kirimKomentar() {
    if (this.komen != '') {
      console.log('Komentar', this.komen);
      this.b.komentar.push({
        user: 'Anda',
        text: this.komen,
        replies: [],
      });
      this.message = 'Komentar berhasil dikirimkan!';
      this.komen = '';
    } else {
      this.message = 'Komentar anda masih kosong!';
    }
  }

  mauReply(index: number) {
    this.indexReply = this.indexReply == index ? null : index;
    this.reply = '';
  }

  kirimReply(index: number) {
    if (this.reply != '') {
      this.b.komentar[index].replies.push({
        user: 'Anda',
        text: this.reply,
      });
    }
    this.reply = '';
    this.indexReply = null;
  }
}
