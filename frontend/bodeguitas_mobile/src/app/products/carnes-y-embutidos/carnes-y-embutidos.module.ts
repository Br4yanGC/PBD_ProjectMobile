import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnesYEmbutidosPageRoutingModule } from './carnes-y-embutidos-routing.module';

import { CarnesYEmbutidosPage } from './carnes-y-embutidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnesYEmbutidosPageRoutingModule
  ],
  declarations: [CarnesYEmbutidosPage]
})
export class CarnesYEmbutidosPageModule {}
