import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormtypePageRoutingModule } from './formtype-routing.module';

import { FormtypePage } from './formtype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormtypePageRoutingModule
  ],
  declarations: [FormtypePage]
})
export class FormtypePageModule {}
