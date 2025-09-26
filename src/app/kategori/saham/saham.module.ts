import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SahamPageRoutingModule } from './saham-routing.module';

import { SahamPage } from './saham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SahamPageRoutingModule
  ],
  declarations: [SahamPage]
})
export class SahamPageModule {}
