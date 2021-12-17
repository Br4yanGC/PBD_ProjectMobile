import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViveresPageRoutingModule } from './viveres-routing.module';

import { ViveresPage } from './viveres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViveresPageRoutingModule
  ],
  declarations: [ViveresPage]
})
export class ViveresPageModule {}
