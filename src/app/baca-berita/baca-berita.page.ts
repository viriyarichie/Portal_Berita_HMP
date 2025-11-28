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
  b: any = null;

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

    // this.kategoris = this.service.kategoris;
    this.route.params.subscribe((params) => {
      this.service.kategoriList().subscribe((data) => {
        this.kategoris = data;
      });
    });

    // this.beritas = this.service.beritas;
    this.route.params.subscribe((params) => {
      this.service.beritaList().subscribe((dataBerita) => {
        this.service.ratingList().subscribe((dataRating) => {
          this.service.komentarList().subscribe((dataKomentar) => {
            this.service.fotoList().subscribe((dataFoto) => {
              this.beritas = dataBerita;
              console.log('📋 ALL Komentar from API:', dataKomentar);

              for (var i = 0; i < this.beritas.length; i++) {
                var idberita = this.beritas[i].idberita;

                var ratingBerita = [];
                for (var j = 0; j < dataRating.length; j++) {
                  if (dataRating[j].berita_idberita == idberita) {
                    ratingBerita.push(Number(dataRating[j].rating));
                  }
                }
                this.beritas[i].rating = ratingBerita;

                var komentarBerita = [];
                for (var k = 0; k < dataKomentar.length; k++) {
                  if (dataKomentar[k].berita_idberita == idberita) {
                    console.log(
                      '✅ Found komentar for berita',
                      idberita,
                      dataKomentar[k]
                    );
                    komentarBerita.push({
                      nama: dataKomentar[k].nama,
                      text: dataKomentar[k].komentar,
                      reply: [],
                    });
                  }
                }
                console.log(
                  '📝 Final komentar for this berita:',
                  komentarBerita
                );
                this.beritas[i].komentar = komentarBerita;

                var fotoBerita = [];
                for (var l = 0; l < dataFoto.length; l++) {
                  if (dataFoto[l].berita_idberita == idberita) {
                    fotoBerita.push(dataFoto[l].path);
                  }
                }
                this.beritas[i].foto = fotoBerita;
              }

              for (let berita of this.beritas) {
                if (berita.judul == this.judulGet) {
                  this.judul = berita.judul;
                  this.isi = berita.isi;
                  this.fotoJudul = berita.fotoJudul;
                  this.foto = berita.foto;
                  this.rating = berita.rating;
                  this.penulis = berita.penulis;
                  this.tglUpload = new Date(berita.tanggalUpload);

                  this.b = berita;
                  break;
                }
              }
            });
          });
        });
      });
    });
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
    if (this.b.isFavorite == true) {
      this.b.isFavorite = false;
    } else {
      this.b.isFavorite = true;
    }
  }

  listRating: number[] = [1, 2, 3, 4, 5];
  ratingInput: number = 0;
  public alertButtons = ['OK'];
  message = '';

  clickRating(rate: number) {
    this.ratingInput = rate;

    this.b?.rating.push(rate);
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
      this.b.komentar.push({
        nama: 'Anda',
        text: this.komen,
        reply: [],
      });
      this.komen = '';
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
