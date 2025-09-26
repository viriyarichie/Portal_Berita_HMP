import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeknologiPage } from './teknologi.page';

const routes: Routes = [
  {
    path: '',
    component: TeknologiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeknologiPageRoutingModule {}
