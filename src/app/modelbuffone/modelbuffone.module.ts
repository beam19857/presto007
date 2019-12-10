import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModelbuffonePage } from './modelbuffone.page';

const routes: Routes = [
  {
    path: '',
    component: ModelbuffonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModelbuffonePage]
})
export class ModelbuffonePageModule {}
