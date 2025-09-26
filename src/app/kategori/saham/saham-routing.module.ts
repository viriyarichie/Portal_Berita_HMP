import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SahamPage } from './saham.page';

const routes: Routes = [
  {
    path: '',
    component: SahamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SahamPageRoutingModule {}
