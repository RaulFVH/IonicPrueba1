import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paquete2PageRoutingModule } from './paquete2-routing.module';

import { Paquete2Page } from './paquete2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paquete2PageRoutingModule
  ],
  declarations: [Paquete2Page]
})
export class Paquete2PageModule {}
