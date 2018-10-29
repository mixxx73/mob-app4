import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VenueSinglePage } from './venue-single.page';

const routes: Routes = [
  {
    path: '',
    component: VenueSinglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VenueSinglePage]
})
export class VenueSinglePageModule {}
