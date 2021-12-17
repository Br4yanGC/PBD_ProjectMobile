import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DulcesYSnacksPageRoutingModule } from './dulces-y-snacks-routing.module';

import { DulcesYSnacksPage } from './dulces-y-snacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DulcesYSnacksPageRoutingModule
  ],
  declarations: [DulcesYSnacksPage]
})
export class DulcesYSnacksPageModule {}
