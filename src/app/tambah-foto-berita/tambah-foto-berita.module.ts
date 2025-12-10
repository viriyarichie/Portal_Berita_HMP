import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahFotoBeritaPageRoutingModule } from './tambah-foto-berita-routing.module';

import { TambahFotoBeritaPage } from './tambah-foto-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahFotoBeritaPageRoutingModule
  ],
  declarations: [TambahFotoBeritaPage]
})
export class TambahFotoBeritaPageModule {}
