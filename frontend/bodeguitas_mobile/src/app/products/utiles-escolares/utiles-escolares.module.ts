import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilesEscolaresPageRoutingModule } from './utiles-escolares-routing.module';

import { UtilesEscolaresPage } from './utiles-escolares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilesEscolaresPageRoutingModule
  ],
  declarations: [UtilesEscolaresPage]
})
export class UtilesEscolaresPageModule {}
