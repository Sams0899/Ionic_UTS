import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpagePage } from './mainpage.page';

const routes: Routes = [
  {
    path: '',
    component: MainpagePage
  },
  {
    path: ':productId',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainpagePageRoutingModule {}
