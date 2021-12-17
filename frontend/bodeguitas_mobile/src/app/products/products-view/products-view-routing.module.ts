import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsViewPage } from './products-view.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsViewPage
  },
  {
    path: 'products-edit/:product_id',
    loadChildren: () => import('../products-edit/products-edit.module').then( m => m.ProductsEditPageModule)
  },
  {
    path: 'products-delete/:user_id/:product_id',
    loadChildren: () => import('../products-delete/products-delete.module').then( m => m.ProductsDeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsViewPageRoutingModule {}
