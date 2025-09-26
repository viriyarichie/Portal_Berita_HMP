import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  fotoJudul: string;
}

@Component({
  selector: 'app-kesehatan',
  templateUrl: './kesehatan.page.html',
  styleUrls: ['./kesehatan.page.scss'],
  standalone: false,
})
export class KesehatanPage implements OnInit {
  constructor(private router: Router) {}

  kategoris: { name: string; route: string }[] = [
    { name: 'Ekonomi', route: '/kategori/ekonomi' },
    { name: 'Olahraga', route: '/kategori/olahraga' },
    { name: 'Teknologi', route: '/kategori/teknologi' },
    { name: 'Kesehatan', route: '/kategori/kesehatan' },
    { name: 'Saham', route: '/kategori/saham' },
  ];

  beritas: Berita[] = [
    {
      judul: 'Pola Makan Sehat',
      isi: 'Ahli gizi menyarankan konsumsi sayur dan buah setiap hari untuk meningkatkan daya tahan tubuh.',
      kategori: [this.kategoris[3].name],
      fotoJudul: 'assets/img/makan-sehat.jpg',
    },
    {
      judul: 'Olahraga dan Kesehatan Jantung',
      isi: 'Riset menunjukkan olahraga 30 menit sehari dapat menurunkan risiko penyakit jantung hingga 40%.',
      kategori: [this.kategoris[3].name, this.kategoris[1].name],
      fotoJudul: 'assets/img/jantung.jpg',
    },
  ];

  ngOnInit() {}

  goToBerita(judul: string) {
    this.router.navigate(['/baca-berita', judul]);
  }
}
