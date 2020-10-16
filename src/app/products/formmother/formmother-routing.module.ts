import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormmotherPage } from './formmother.page';

const routes: Routes = [
  {
    path: '',
    component: FormmotherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormmotherPageRoutingModule {}
