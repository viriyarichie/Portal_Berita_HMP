import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KesehatanPage } from './kesehatan.page';

const routes: Routes = [
  {
    path: '',
    component: KesehatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KesehatanPageRoutingModule {}
