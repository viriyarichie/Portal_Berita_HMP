import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HapusBeritaPageRoutingModule } from './hapus-berita-routing.module';

import { HapusBeritaPage } from './hapus-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HapusBeritaPageRoutingModule
  ],
  declarations: [HapusBeritaPage]
})
export class HapusBeritaPageModule {}
