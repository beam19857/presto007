import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModelbufftwoPage } from './modelbufftwo.page';

const routes: Routes = [
  {
    path: '',
    component: ModelbufftwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModelbufftwoPage]
})
export class ModelbufftwoPageModule {}
