import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuatBeritaPage } from './buat-berita.page';

const routes: Routes = [
  {
    path: '',
    component: BuatBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuatBeritaPageRoutingModule {}
