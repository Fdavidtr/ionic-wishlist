import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddWishlistItemPage } from './add-wishlist-item.page';


const routes: Routes = [
  {
    path: '',
    component: AddWishlistItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddWishlistItemPage]
})
export class AddWishlistPageModule {}
