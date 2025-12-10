import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuatBeritaPageRoutingModule } from './buat-berita-routing.module';

import { BuatBeritaPage } from './buat-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuatBeritaPageRoutingModule
  ],
  declarations: [BuatBeritaPage]
})
export class BuatBeritaPageModule {}
