import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailPage } from './product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPage
  },
  {
    path: 'editproduct',
    loadChildren: () => import('./editproduct/editproduct.module').then( m => m.EditproductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailPageRoutingModule {}
