import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: ':productId',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'add/form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'add/type',
    loadChildren: () => import('./formtype/formtype.module').then( m => m.FormtypePageModule)
  },
  {
    path: 'add/formgpu',
    loadChildren: () => import('./formgpu/formgpu.module').then( m => m.FormgpuPageModule)
  },
  {
    path: 'add/formmother',
    loadChildren: () => import('./formmother/formmother.module').then( m => m.FormmotherPageModule)
  },
  {
    path: 'add/formram',
    loadChildren: () => import('./formram/formram.module').then( m => m.FormramPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
