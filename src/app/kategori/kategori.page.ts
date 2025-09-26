import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Kategori {
  name: string;
  route: string;
}

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
  standalone: false,
})
export class KategoriPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  kategoris: Kategori[] = [
    { name: 'Ekonomi', route: '/kategori/ekonomi' },
    { name: 'Olahraga', route: '/kategori/olahraga' },
    { name: 'Teknologi', route: '/kategori/teknologi' },
    { name: 'Kesehatan', route: '/kategori/kesehatan' },
    { name: 'Saham', route: '/kategori/saham' },
  ];

  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
