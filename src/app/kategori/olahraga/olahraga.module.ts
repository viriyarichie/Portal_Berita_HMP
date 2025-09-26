import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlahragaPageRoutingModule } from './olahraga-routing.module';

import { OlahragaPage } from './olahraga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlahragaPageRoutingModule
  ],
  declarations: [OlahragaPage]
})
export class OlahragaPageModule {}
