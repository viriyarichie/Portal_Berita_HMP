import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EkonomiPage } from './ekonomi.page';

const routes: Routes = [
  {
    path: '',
    component: EkonomiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EkonomiPageRoutingModule {}
