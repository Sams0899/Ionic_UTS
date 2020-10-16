import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormgpuPage } from './formgpu.page';

const routes: Routes = [
  {
    path: '',
    component: FormgpuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormgpuPageRoutingModule {}
