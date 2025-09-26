import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeknologiPageRoutingModule } from './teknologi-routing.module';

import { TeknologiPage } from './teknologi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeknologiPageRoutingModule
  ],
  declarations: [TeknologiPage]
})
export class TeknologiPageModule {}
