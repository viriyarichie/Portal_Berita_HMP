import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EkonomiPageRoutingModule } from './ekonomi-routing.module';

import { EkonomiPage } from './ekonomi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EkonomiPageRoutingModule
  ],
  declarations: [EkonomiPage]
})
export class EkonomiPageModule {}
