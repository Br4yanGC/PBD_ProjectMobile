import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DulcesYSnacksPage } from './dulces-y-snacks.page';

const routes: Routes = [
  {
    path: '',
    component: DulcesYSnacksPage
  },
  {
    path: 'products-view/:product_id',
    loadChildren: () => import('../products-view/products-view.module').then( m => m.ProductsViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DulcesYSnacksPageRoutingModule {}
