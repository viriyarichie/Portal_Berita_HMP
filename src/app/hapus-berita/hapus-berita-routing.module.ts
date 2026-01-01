import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HapusBeritaPage } from './hapus-berita.page';

const routes: Routes = [
  {
    path: '',
    component: HapusBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HapusBeritaPageRoutingModule {}
