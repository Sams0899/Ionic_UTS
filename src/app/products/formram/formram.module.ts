import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormramPageRoutingModule } from './formram-routing.module';

import { FormramPage } from './formram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormramPageRoutingModule
  ],
  declarations: [FormramPage]
})
export class FormramPageModule {}
