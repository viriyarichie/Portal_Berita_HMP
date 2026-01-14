import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Portalberita } from '../portalberita';

@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
  standalone: false,
})
export class BacaBeritaPage implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: Portalberita,
    private NavCtrl: NavController
  ) {}

  komen: string = '';
  kategoris: any[] = [];
  beritas: any[] = [];
  komentars: any[] = [];

  judul: string = '';
  isi: string = '';
  fotoJudul: string = '';
  foto: string[] = [];
  rating: number[] = [];
  penulis: string = '';
  tglUpload: Date = new Date();
  b: any = null;

  judulGet: string = '';
  kategoriGet: string = '';
  dari: string = '';

  indexReply: number | null = null;
  reply: string = '';

  iduser: string = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dari = params['asal'];
      this.judulGet = params['judul'];
    });

    this.route.params.subscribe((params) => {
      this.service.kategoriList().subscribe((data) => {
        this.kategoris = data;
      });
    });

    this.service.beritaList().subscribe((dataBerita) => {
      this.beritas = dataBerita;

      for (var berita of this.beritas) {
        if (berita.judul == this.judulGet) {
          this.judul = berita.judul;
          this.isi = berita.isi;
          this.fotoJudul = berita.fotoJudul;
          this.foto = berita.foto;
          this.rating = berita.rating;
          this.penulis = berita.penulis;
          this.tglUpload = new Date(berita.tanggalUpload);

          this.b = berita;
        }
      }
    });
  }

  ionViewWillEnter() {
    var user = localStorage.getItem('userLogin');
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    var userParse = JSON.parse(user);
    this.iduser = userParse.iduser;

    console.log('ID user : ' + this.iduser);
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
    if (this.b.isFavorite == 'true') {
      this.b.isFavorite = 'false';
    } else {
      this.b.isFavorite = 'true';
    }

    this.service
      .updateFavorite(this.b.idberita, this.b.isFavorite)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('success');
        } else {
          alert(response.message);
        }
      });
  }

  listRating: number[] = [1, 2, 3, 4, 5];
  ratingInput: number = 0;
  public alertButtons = ['OK'];
  message = '';

  clickRating(rate: number) {
    this.ratingInput = rate;

    this.service
      .insertRating(this.b?.idberita, this.iduser, rate.toString())
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Berhasil memberikan rating!');
        } else {
          alert('Gagal memberikan rating : ' + response.message);
        }
      });
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  totalKomentar() {
    if (!this.b || !this.b.komentar) {
      return 0;
    }

    var total = 0;
    for (var i = 0; i < this.b.komentar.length; i++) {
      total++;

      if (this.b.komentar[i].reply.length > 0) {
        total += this.b.komentar[i].reply.length;
      }
    }
    return total;
  }

  kirimKomentar() {
    if (this.komen != '') {
      this.service
        .insertKomentar(this.b?.idberita, this.iduser, this.komen)
        .subscribe((response: any) => {
          if (response.result === 'success') {
            alert('Berhasil memberikan komentar!');
          } else {
            alert('Gagal memberikan komentar : ' + response.message);
          }
        });

      this.komen = '';
    }
  }

  mauReply(index: number) {
    this.indexReply = this.indexReply == index ? null : index;
    this.reply = '';
  }

  kirimReply(index: number) {
    var parent = this.b.komentar[index];

    if (this.reply != '') {
      this.service
        .insertReply(
          this.b.idberita,
          this.iduser,
          this.reply,
          parent.idkomentar
        )
        .subscribe((response: any) => {
          if (response.result === 'success') {
            alert('Berhasil memberikan komentar!');
          } else {
            alert('Gagal memberikan reply : ' + response.message);
          }
        });

      this.reply = '';
    }
  }
}
