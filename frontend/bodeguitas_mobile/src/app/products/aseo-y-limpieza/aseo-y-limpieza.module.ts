import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AseoYLimpiezaPageRoutingModule } from './aseo-y-limpieza-routing.module';

import { AseoYLimpiezaPage } from './aseo-y-limpieza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AseoYLimpiezaPageRoutingModule
  ],
  declarations: [AseoYLimpiezaPage]
})
export class AseoYLimpiezaPageModule {}
