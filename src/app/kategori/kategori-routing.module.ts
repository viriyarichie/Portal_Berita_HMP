import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriPage } from './kategori.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriPage,
  },
  {
    path: 'olahraga',
    loadChildren: () =>
      import('./olahraga/olahraga.module').then((m) => m.OlahragaPageModule),
  },
  {
    path: 'ekonomi',
    loadChildren: () =>
      import('./ekonomi/ekonomi.module').then((m) => m.EkonomiPageModule),
  },
  {
    path: 'teknologi',
    loadChildren: () =>
      import('./teknologi/teknologi.module').then((m) => m.TeknologiPageModule),
  },
  {
    path: 'kesehatan',
    loadChildren: () =>
      import('./kesehatan/kesehatan.module').then((m) => m.KesehatanPageModule),
  },
  {
    path: 'saham',
    loadChildren: () =>
      import('./saham/saham.module').then((m) => m.SahamPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriPageRoutingModule {}
