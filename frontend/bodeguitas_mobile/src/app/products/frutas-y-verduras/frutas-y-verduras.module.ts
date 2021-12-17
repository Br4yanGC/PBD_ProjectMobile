import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutasYVerdurasPageRoutingModule } from './frutas-y-verduras-routing.module';

import { FrutasYVerdurasPage } from './frutas-y-verduras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutasYVerdurasPageRoutingModule
  ],
  declarations: [FrutasYVerdurasPage]
})
export class FrutasYVerdurasPageModule {}
