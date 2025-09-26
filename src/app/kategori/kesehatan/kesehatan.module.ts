import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KesehatanPageRoutingModule } from './kesehatan-routing.module';

import { KesehatanPage } from './kesehatan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KesehatanPageRoutingModule
  ],
  declarations: [KesehatanPage]
})
export class KesehatanPageModule {}
