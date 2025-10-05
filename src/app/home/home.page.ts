import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Kategori {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  kategoris: Kategori[] = [
    { name: 'Ekonomi' },
    { name: 'Olahraga' },
    { name: 'Teknologi' },
    { name: 'Kesehatan' },
    { name: 'Saham' },
  ];

  goToPage(route: string) {
    this.router.navigate(['/kategori', route]);
  }
}
