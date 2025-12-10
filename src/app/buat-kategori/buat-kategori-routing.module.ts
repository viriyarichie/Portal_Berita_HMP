import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuatKategoriPage } from './buat-kategori.page';

const routes: Routes = [
  {
    path: '',
    component: BuatKategoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuatKategoriPageRoutingModule {}
