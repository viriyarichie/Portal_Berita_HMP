import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Portalberita } from '../portalberita';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
  standalone: false,
})
export class MyFavoritePage implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: Portalberita
  ) {}

  namaKategori: string = '';
  kategoris: any[] = [];
  beritas: any[] = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.namaKategori = params['namaKategori'];
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
          this.beritas = dataBerita;

          for (var i = 0; i < this.beritas.length; i++) {
            var idberita = this.beritas[i].idberita;

            var ratingBerita = [];

            for (var j = 0; j < dataRating.length; j++) {
              if (dataRating[j].berita_idberita == idberita) {
                ratingBerita.push(Number(dataRating[j].rating));
              }
            }
            this.beritas[i].rating = ratingBerita;
          }
        });
      });
    });
  }

  // gantiFavorit(b: Berita) {
  //   if (b) {
  //     if (b.isFavorite == true) {
  //       b.isFavorite = false;
  //     } else {
  //       b.isFavorite = true;
  //     }
  //   }
  // }

  listRating: number[] = [1, 2, 3, 4, 5];

  getRating(arrayRating: number[]): number {
    if (arrayRating.length > 0) {
      var totalRating = 0;
      for (var i = 0; i < arrayRating.length; i++) {
        totalRating += arrayRating[i];
      }
    } else {
      return 0;
    }

    return parseFloat((totalRating / arrayRating.length).toFixed(1));
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
