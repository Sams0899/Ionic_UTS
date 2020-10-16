import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormmotherPageRoutingModule } from './formmother-routing.module';

import { FormmotherPage } from './formmother.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormmotherPageRoutingModule
  ],
  declarations: [FormmotherPage]
})
export class FormmotherPageModule {}
