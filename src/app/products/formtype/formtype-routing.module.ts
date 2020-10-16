import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormtypePage } from './formtype.page';

const routes: Routes = [
  {
    path: '',
    component: FormtypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormtypePageRoutingModule {}
