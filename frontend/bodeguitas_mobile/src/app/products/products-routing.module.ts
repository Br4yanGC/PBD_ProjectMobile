import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'aseo-y-limpieza',
    loadChildren: () => import('./aseo-y-limpieza/aseo-y-limpieza.module').then( m => m.AseoYLimpiezaPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'carnes-y-embutidos',
    loadChildren: () => import('./carnes-y-embutidos/carnes-y-embutidos.module').then( m => m.CarnesYEmbutidosPageModule)
  },
  {
    path: 'dulces-y-snacks',
    loadChildren: () => import('./dulces-y-snacks/dulces-y-snacks.module').then( m => m.DulcesYSnacksPageModule)
  },
  {
    path: 'frutas-y-verduras',
    loadChildren: () => import('./frutas-y-verduras/frutas-y-verduras.module').then( m => m.FrutasYVerdurasPageModule)
  },
  {
    path: 'utiles-escolares',
    loadChildren: () => import('./utiles-escolares/utiles-escolares.module').then( m => m.UtilesEscolaresPageModule)
  },
  {
    path: 'viveres',
    loadChildren: () => import('./viveres/viveres.module').then( m => m.ViveresPageModule)
  },
  {
    path: 'products-create',
    loadChildren: () => import('./products-create/products-create.module').then( m => m.ProductsCreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
