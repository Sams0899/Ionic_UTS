import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormgpuPageRoutingModule } from './formgpu-routing.module';

import { FormgpuPage } from './formgpu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormgpuPageRoutingModule
  ],
  declarations: [FormgpuPage]
})
export class FormgpuPageModule {}
