import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Portalberita } from '../portalberita';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
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

    this.kategoris = this.service.kategoris;
    this.beritas = this.service.beritas;
  }

  goToPage(route: string) {
    this.router.navigate(['/kategori', route]);
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
