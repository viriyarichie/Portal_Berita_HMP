import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuatKategoriPageRoutingModule } from './buat-kategori-routing.module';

import { BuatKategoriPage } from './buat-kategori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuatKategoriPageRoutingModule
  ],
  declarations: [BuatKategoriPage]
})
export class BuatKategoriPageModule {}
