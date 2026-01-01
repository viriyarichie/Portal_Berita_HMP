import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Portalberita } from '../portalberita';

@Component({
  selector: 'app-hapus-berita',
  templateUrl: './hapus-berita.page.html',
  styleUrls: ['./hapus-berita.page.scss'],
  standalone: false,
})
export class HapusBeritaPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Portalberita
  ) {}

  username: string = '';
  beritas: any[] = [];
  beritaFiltered: any[] = [];

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('username : ' + this.username);

    var user = localStorage.getItem('userLogin');
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    var userParse = JSON.parse(user);

    this.username = userParse.email;

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

          this.beritaFiltered = this.beritas;
        });
      });
    });
  }

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

  hapusBerita(idBerita: number) {
    this.service.hapusBerita(idBerita).subscribe((response: any) => {
      if ((response.result = 'success')) {
        alert('Berita berhasil dihapus');
      } else {
        alert('Gagal hapus berita : ' + response.message);
      }
    });
  }
}
