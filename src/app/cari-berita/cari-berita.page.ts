import { Component, OnInit } from '@angular/core';
import { Portalberita } from '../portalberita';



@Component({
  selector: 'app-cari-berita',
  templateUrl: './cari-berita.page.html',
  styleUrls: ['./cari-berita.page.scss'],
  standalone: false,
})
export class CariBeritaPage implements OnInit {
  constructor(private service:Portalberita) {}

  kategoris: any[] = [];
  beritas: any[] = [];
  beritaFiltered: any[] = [];

  ngOnInit() {
    this.kategoris = this.service.getKategoris();
    this.beritas = this.service.getAllBerita();
    this.beritaFiltered = this.beritas;
  }

  cari: string = '';
  //pake service
  search() {
    this.beritaFiltered = this.beritas.filter((b) =>
      b.judul.toLowerCase().includes(this.cari.toLowerCase())
    );
  }

  //old
  // search() {
  //   this.beritaFiltered = [];
  //   for (var i = 0; i < this.beritas.length; i++) {
  //     if (
  //       this.beritas[i].judul.toLowerCase().includes(this.cari.toLowerCase())
  //     ) {
  //       this.beritaFiltered.push(this.beritas[i]);
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
