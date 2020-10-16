import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormramPage } from './formram.page';

const routes: Routes = [
  {
    path: '',
    component: FormramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormramPageRoutingModule {}
