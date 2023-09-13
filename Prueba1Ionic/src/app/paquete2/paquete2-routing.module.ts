import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paquete2Page } from './paquete2.page';

const routes: Routes = [
  {
    path: '',
    component: Paquete2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paquete2PageRoutingModule {}
