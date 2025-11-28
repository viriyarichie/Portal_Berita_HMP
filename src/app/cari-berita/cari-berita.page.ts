import { Component, OnInit } from '@angular/core';
import { Portalberita } from '../portalberita';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cari-berita',
  templateUrl: './cari-berita.page.html',
  styleUrls: ['./cari-berita.page.scss'],
  standalone: false,
})
export class CariBeritaPage implements OnInit {
  constructor(private service: Portalberita, private route: ActivatedRoute) {}

  kategoris: any[] = [];
  beritas: any[] = [];
  beritaFiltered: any[] = [];

  ngOnInit() {
    // this.kategoris = this.service.kategoris;
    this.route.params.subscribe((params) => {
      this.service.kategoriList().subscribe((data) => {
        this.kategoris = data;
      });
    });

    this.beritas = this.service.beritas;
    this.beritaFiltered = this.beritas;
  }

  cari: string = '';

  search() {
    this.beritaFiltered = [];
    for (var i = 0; i < this.beritas.length; i++) {
      if (
        this.beritas[i].judul.toLowerCase().includes(this.cari.toLowerCase())
      ) {
        this.beritaFiltered.push(this.beritas[i]);
      }
    }
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
}
