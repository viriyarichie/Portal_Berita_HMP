import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlahragaPage } from './olahraga.page';

const routes: Routes = [
  {
    path: '',
    component: OlahragaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlahragaPageRoutingModule {}
