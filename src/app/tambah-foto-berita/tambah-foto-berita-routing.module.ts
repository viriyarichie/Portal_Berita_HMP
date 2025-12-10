import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahFotoBeritaPage } from './tambah-foto-berita.page';

const routes: Routes = [
  {
    path: '',
    component: TambahFotoBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahFotoBeritaPageRoutingModule {}
