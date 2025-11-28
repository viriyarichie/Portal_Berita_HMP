import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Portalberita } from '../portalberita';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
  standalone: false,
})
export class KategoriPage implements OnInit {
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
    this.beritas = this.service.beritas;
  }

  display() {
    var display = [];
    var kategoriBerita = this.namaKategori;

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
}
